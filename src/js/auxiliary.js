import $ from 'jquery';

function setYearsExperience() {
  const yearFounded = 2008;
  const yearNow = (new Date()).getFullYear();
  // set experience time under the logo in 'Doswiadczenie' section
  $('.js-doswiadczenie__x-lat').html(`${yearNow - yearFounded} lat doświadczenia`);
}

export default setYearsExperience;
