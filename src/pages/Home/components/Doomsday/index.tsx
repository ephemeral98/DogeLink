import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';

const DoomsdayWrap = styled.div`
  padding: 156rem 0 170rem;
  background-color: #fed100;

  .doomsday-main {
    width: 1190rem;
    margin: 0 auto;
    ${flexPos('center')}
  }
`;

const Doomsday = () => {
  return (
    <DoomsdayWrap>
      <main className="doomsday-main">
        <img src={require('@img/home/img-behold.png')} alt="" className="w-519 mr-113" />

        <section>
          <div className="mb-12 text-32 font-700">Frank Doomsday</div>
          <div>
            “Savior of the Persecuted Puppy, Supreme Adorable Overlord of the Woof Realm,
            Butt-Sniffing Enthusiast, Conqueror of Alternate Realms, Bone-Crushing Battle Commander,
            Sofa Cushion Destroyer, Lamenting Table Leg Artist, Ascendant Leader of the Canine
            World, Venerable and Mighty Grand Marshal, Spiritual Mentor of Lost Souls, Survivor of
            Tail-Chasing Wars, Supernova of Social Media, Supreme Commander of the Canine Force
            Alliance, Reshaper of Human Civilization”
          </div>

          <div className="mt-12 flex items-center">
            <div className="text-16">A.K.A</div>
            <img src={require('@img/home/img-DOGER.png')} alt="" className="w-133 ml-12" />
          </div>
        </section>
      </main>
    </DoomsdayWrap>
  );
};

export default Doomsday;
