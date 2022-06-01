import {
  v4 as uuidv4
} from 'uuid';
export const getUUID = () => {
  let uuid = localStorage.getItem('uuid')
  if (!uuid) {
    uuid = uuidv4()
    localStorage.setItem('uuid', JSON.stringify(uuid))
  }
  return uuid
}