function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  delete newObj.prop
  return Obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object;
}
