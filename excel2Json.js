const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const readline = require('readline/promises');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);
const { stdin: input, stdout: output } = require('process');
const ac = new AbortController();
const signal = ac.signal;

// 指定项目目录
const dirPath = './src';

/**
 * 读取 Excel 文件并生成键值映射
 */
async function excel2Json() {
  const conversionMap = [];
  
  // 读取 Excel 文件
  const data = XLSX.readFile('./data.xlsx', { type: 'array' });
  const list = XLSX.utils.sheet_to_json(data.Sheets['Sheet1']);
  
  // 将 Excel 中的 key 按顺序存入数组
  for (let i = 0, len = list.length; i < len; i++) {
    const row = list[i];
    const key = row['key'];

    if (key) {
      conversionMap.push(key); // 按顺序将 key 添加到数组中
    }
  }

  return conversionMap; // 返回按顺序排列的 key 数组
}

/**
 * 扫描目录并收集 tsx、ts 和 js 文件
 */
function readDirRecursive(dirPath, fileList = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      readDirRecursive(filePath, fileList); // 递归扫描子目录
    } else if (['.tsx', '.ts', '.js'].includes(path.extname(filePath))) {
      fileList.push(filePath); // 收集文件路径
    }
  });

  return fileList;
}

/**
 * 替换文件中的 $ps(`base.x`) 为 $t(`key`)
 */
async function replacePsWithT(filePath, conversionMap) {
  const content = await readFileAsync(filePath, 'utf8');

  // 匹配 $ps(`base.数字`) 模式
  const regex = /\$ps\([`'"]base\.(\d+)[`'"]\)/g;

  // 替换内容
  const replacedContent = content.replace(regex, (match, p1) => {
    const index = parseInt(p1, 10) - 1; // 获取索引，数组是从 0 开始
    const newKey = conversionMap[index]; // 找到对应的 key

    if (newKey) {
      return `$t(\`${newKey}\`)`; // 用新的 key 替换 base.数字
    }

    return match; // 如果没有找到对应的 key，保持原样
  });

  // 将替换后的内容写回文件
  await writeFileAsync(filePath, replacedContent, 'utf-8');
  console.log(`Replaced $ps in ${filePath}`);
}

/**
 * 主函数
 */
async function main() {
  // 从 Excel 中读取键值对映射
  const conversionMap = await excel2Json();

  // 扫描目录，获取所有 tsx、ts、js 文件
  const fileList = readDirRecursive(dirPath);
  console.log('Scanning files...', fileList);

  // 对每个文件进行 $ps 的替换操作
  for (const filePath of fileList) {
    await replacePsWithT(filePath, conversionMap);
  }

  console.log('Replacement done!');
}

main();
