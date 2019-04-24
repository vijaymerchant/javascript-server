let permissions = {
  'getUsers': {
  all: ['head-trainer','student'],
  read : ['trainee', 'trainer'],
  write : ['trainer'],
  delete: [],
  }
  };
console.log('correct :', hasPermission('getUsers','trainee',' write'));
function hasPermission (moduleName, role, permissionType){

  if (permissions[moduleName].all.includes(role) == true){
    return true;
  }
  for (let permission in permissions[moduleName]) {
    if (permission == permissionType && permissions[moduleName][permission].includes(role)) {
      return true;
    }
  }
  return false;

}
