const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="col-md-3">';
  domString += `<div class="card" id="${cow.id}">`;
  domString += `<div class="card-header">${cow.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${cow.breed}</h5>`;
  domString += `<p class="card-text">Weight: ${cow.weight} lbs</p>`;
  domString += `<p class="card-text">Location: ${cow.location}</p>`;
  domString += '<button class="btn btn-danger delete-cow"><i class="fas fa-trash-alt"></i></button>';
  domString += '<button class="btn btn-warning edit-cow"><i class="fas fa-pencil-alt"></i></button>';
  domString += '<p>Owner(s):</p>';
  cow.farmers.forEach((farmer) => {
    domString += '<form>';
    domString += '<div class="form-group form-check">';
    domString += `<input type="checkbox" class="form-check-input farmer-cow-checkbox" data-farmer-uid="${farmer.uid}" id="${farmer.farmerCowId}" ${farmer.isChecked ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="${farmer.farmerCowId}">${farmer.name}</label>`;
    domString += '</div>';
    domString += '</form>';
  });
  domString += '</<button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { cowMaker };
