import { OPEN_ADD_CONTENT_MODAL, CLOSE_ADD_CONTENT_MODAL, MOVE_CONTENT_ADD_MODAL, CHANGE_TAG_NAME_ADD_CONTENT_MODAL, REQUEST_CREATE_TAG_ADD_CONTENT_MODAL, REQUEST_DELETE_TAG_ADD_CONTENT_MODAL, SET_ADD_CONTENT, REQUEST_RECOGNITION_ADD_CONTENT_MODAL, REQUEST_SAVE_ADD_CONTENT } from "../../constants/actionTypes";


export function openAddContentModal() {
  return { type: OPEN_ADD_CONTENT_MODAL };
}

export function closeAddContentModal() {
  return { type: CLOSE_ADD_CONTENT_MODAL };
}

export function moveAddContentModal(step) {
  return {
    type: MOVE_CONTENT_ADD_MODAL,
    payload: step,
  };
}

export function changeTagNameAddContentModal(name) {
  return {
    type: CHANGE_TAG_NAME_ADD_CONTENT_MODAL,
    payload: name,
  };
};

export function createTagAddContentModal(tag) {
  return {
    type: REQUEST_CREATE_TAG_ADD_CONTENT_MODAL,
    payload: tag,
  }
}

export function deleteTagAddContentModal(tag) {
  return {
    type: REQUEST_DELETE_TAG_ADD_CONTENT_MODAL,
    payload: tag,
  }
}

export function setAddContentModal(item) {
  return {
    type: SET_ADD_CONTENT,
    payload: item,
  }
}

export function recognition() {
  return {
    type: REQUEST_RECOGNITION_ADD_CONTENT_MODAL,
  };
}

export function saveAddContent() {
  return {
    type: REQUEST_SAVE_ADD_CONTENT,
  };
}

