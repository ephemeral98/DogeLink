import React, { FC, ReactNode, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { $height } from '@/styled/mediaSize';

const MarqueeWrap = styled.div`
  background-color: #000;
  color: #fad814;
  font-size: 21rem; /* Adjust font size as needed */
  font-weight: bold;
  overflow: hidden;
  position: relative;
  width: 100%; /* Container width */
  ${$height('45rem', '53rem', '53rem')}

  .marquee-wrapper {
    position: relative;
    white-space: nowrap;
    height: 100%;
  }

  .moving-text {
    position: absolute;
    white-space: nowrap;
    padding: 0 10px;
    user-select: none;
    cursor: default;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Marquee: FC<{ children: ReactNode }> = ({ children }) => {
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeTextRef = useRef<HTMLParagraphElement>(null);
  const animationRef = useRef<number>();
  const directionRef = useRef<number>(-1); // -1 for left, 1 for right
  const positionRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const [showMarquee, setShowMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMarquee(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!showMarquee) {
      return;
    }

    const container = marqueeContainerRef.current;
    const text = marqueeTextRef.current;

    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    const textWidth = text.offsetWidth;

    const minLeft = containerWidth - textWidth; // Negative value
    const maxLeft = 0; // Starting position

    positionRef.current = maxLeft;

    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current += directionRef.current * 1; // 1px per frame

        // Check boundaries
        if (directionRef.current === -1 && positionRef.current <= minLeft) {
          positionRef.current = minLeft;
          directionRef.current = 1;
        } else if (directionRef.current === 1 && positionRef.current >= maxLeft) {
          positionRef.current = maxLeft;
          directionRef.current = -1;
        }

        text.style.left = `${positionRef.current}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [showMarquee]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  if (!showMarquee) {
    return <></>;
  }

  return (
    <MarqueeWrap
      ref={marqueeContainerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marquee-wrapper">
        <p className="moving-text Poppins-ExtraBold" ref={marqueeTextRef}>
          {children}
        </p>
      </div>
    </MarqueeWrap>
  );
};

export default Marquee;
