const CREATE_COMMENT = "comment/createComment";
const GET_POST_COMMENTS = "comment/getComments";
const EDIT_COMMENT = "comment/updateComment";
const DELETE_COMMENT = "comment/deleteComment";

// Action Creators
const createComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};

const getPostComments = (comments) => {
  return {
    type: GET_POST_COMMENTS,
    comments,
  };
};

const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment,
  };
};

const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

// Thunks

//Create
export const createCommentRequest = (newComment) => async (dispatch) => {
  const res = await fetch(`/api/posts/${newComment.post_id}/comments/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });
  if (res.ok) {
    const comment = await res.json();
    dispatch(createComment(comment));
    return comment;
  } else if (res.status < 500) {
    return await res.json();
  } else {
    return ["An error occurred. Please try again"];
  }
};

// Get all post's comments
export const getAllPostCommentsRequest = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/comments`, {});
  if (res.ok) {
    const comments = await res.json();
    dispatch(getPostComments(comments));
    return comments;
  }
  return res;
};

// Edit comment
export const editCommentRequest = (data) => async (dispatch) => {
  const res = await fetch(`/api/comments/${data.id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const editedComment = await res.json();
    dispatch(editComment(editedComment));
    return editedComment;
  } else if (res.status < 500) {
    return await res.json()
  } else {
    return ["An error occured. Please try again"]
  }
}

// Delete comment
export const deleteCommentRequest = (commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE"
  });
  if (res.ok) {
    dispatch(deleteComment(commentId));
    return commentId
  }
  return res;
}

//Initial State
let initialState = {};

//Reducer
const commentsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case CREATE_COMMENT: {
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    }
    case GET_POST_COMMENTS: {
      console.log("GET_POST_COMMENTS");
      console.log(action.comments);
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return { ...newState };
    }
    case EDIT_COMMENT: {
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState
    }
    case DELETE_COMMENT: {
      newState = {...state };
      delete newState[action.commentId];
      return newState
    }
    default:
      return state;
  }
};

export default commentsReducer;
