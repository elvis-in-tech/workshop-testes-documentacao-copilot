let initiatives = [
  { id: 1, name: 'Plant Trees', description: 'Plant 1000 trees in the city', category: 'ecological action', status: 'active' },
  { id: 2, name: 'Reduce Carbon', description: 'Reduce carbon emissions by 20%', category: 'carbon reduction', status: 'pending' }
];
let nextId = 3;

function getAll() {
  return initiatives;
}

function getById(id) {
  return initiatives.find(initiative => initiative.id === parseInt(id));
}

function create(initiative) {
  initiative.id = nextId++;
  initiatives.push(initiative);
  return initiative;
}

function update(id, updatedInitiative) {
  const index = initiatives.findIndex(initiative => initiative.id === parseInt(id));
  if (index !== -1) {
    initiatives[index] = { ...initiatives[index], ...updatedInitiative };
    return initiatives[index];
  }
  return null;
}

function remove(id) {
  const index = initiatives.findIndex(initiative => initiative.id === parseInt(id));
  if (index !== -1) {
    return initiatives.splice(index, 1)[0];
  }
  return null;
}

module.exports = { getAll, getById, create, update, remove };