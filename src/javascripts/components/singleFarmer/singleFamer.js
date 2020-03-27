import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildFarmer = (e) => {
  const farmerId = e.target.closest('.card').id;
  smash.getSingleFarmerWithCows(farmerId)
    .then((singleFarmer) => {
      console.error('single farmer', singleFarmer);
      let domString = '';
      domString += '<h2 class="text-center">Featured Farmer</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark">';
      domString += `<div class="card-header">Farmer ${singleFarmer.name} (Age: ${singleFarmer.age})</div>`;
      domString += '<div class="card-body">';
      domString += '<h5 class="card-title">Cows Owned: </h5>';
      domString += '<p class="card-text"></p>';
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('single-farmer', domString);
    })
    .catch((err) => console.error('problem with single farmer', err));
};

export default { buildFarmer };