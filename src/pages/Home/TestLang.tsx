import styled from 'styled-components';
import i18next from '@/locales/i18n';

export const TestLangWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const TestLang = () => {
  const [count, setCount] = useState(0);
  const [section, setSection] = useState(0);

  return (
    <TestLangWrap>
      <button
        onClick={() => {
          i18next.changeLanguage('zh');
        }}
      >
        切换语言
      </button>
    </TestLangWrap>
  );
};

export default TestLang;
