import { $marginRight, $width, phoneSize } from '@/styled/mediaSize';
import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';

const DoomsdayWrap = styled.div`
  padding: 156rem 0 170rem;
  background-color: #fed100;

  @media (max-width: ${phoneSize}) {
    padding: 60rem 0 150rem;
  }

  .doomsday-main {
    ${$width('100%', '100%', '1190rem')}
    margin: 0 auto;
    ${flexPos('center')}

    @media (max-width: ${phoneSize}) {
      flex-direction: column;
    }
  }

  .img-behold {
    ${$width('333rem', '40vw', '519rem')}
    ${$marginRight('0', '113rem', '113rem')}
  }

  .aka {
    margin-top: 12rem;
    display: flex;
    align-items: center;

    @media (max-width: ${phoneSize}) {
      justify-content: center;
    }
  }
`;

const Doomsday = () => {
  return (
    <DoomsdayWrap>
      <main className="doomsday-main">
        <img src={require('@img/home/img-behold.png')} alt="" className="img-behold" />

        <section>
          <div className="mt-60 md:mt-0 mb-12 text-28 md:text-32 font-700 text-center md:text-left">
            Frank Doomsday
          </div>
          <div className="px-30 md:px-0 Poppins-LightItalic">
            “Savior of the Persecuted Puppy, Supreme Adorable Overlord of the Woof Realm,
            Butt-Sniffing Enthusiast, Conqueror of Alternate Realms, Bone-Crushing Battle Commander,
            Sofa Cushion Destroyer, Lamenting Table Leg Artist, Ascendant Leader of the Canine
            World, Venerable and Mighty Grand Marshal, Spiritual Mentor of Lost Souls, Survivor of
            Tail-Chasing Wars, Supernova of Social Media, Supreme Commander of the Canine Force
            Alliance, Reshaper of Human Civilization”
          </div>

          <div className="aka">
            <div className="text-16">A.K.A</div>
            <img src={require('@img/home/img-DOGER.png')} alt="" className="w-133 ml-12" />
          </div>
        </section>
      </main>
    </DoomsdayWrap>
  );
};

export default Doomsday;
