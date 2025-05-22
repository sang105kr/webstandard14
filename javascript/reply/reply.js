const commentInput = document.getElementById("comment-input");
const submitButton = document.getElementById("submit-button");
const commentsList = document.getElementById("comments-list");
const deleteDialog = document.getElementById("delete-dialog");
const confirmDeleteButton = document.getElementById("confirm-delete");
const cancelDeleteButton = document.getElementById("cancel-delete");

let comments = [];
let deleteCommentId = null; // 삭제할 댓글 ID

// 댓글 작성 함수
function addComment() {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentId = Date.now();
        comments.push({ id: commentId, text: commentText });
        commentInput.value = '';
        renderComments();
    }
}

// 댓글 삭제 확인 함수
function showDeleteDialog(id) {
    deleteCommentId = id;
    deleteDialog.showModal(); // <dialog> 열기
}

// 댓글 삭제 함수
function deleteComment() {
    comments = comments.filter(comment => comment.id !== deleteCommentId);
    deleteDialog.close(); // <dialog> 닫기
    renderComments();
}

// 댓글 삭제 취소 함수
function cancelDelete() {
    deleteDialog.close(); // <dialog> 닫기
}

// 댓글 수정 시작 함수
function startEditComment(id) {
    const comment = comments.find(comment => comment.id === id);
    const commentDiv = document.getElementById(`comment-${id}`);
    
    commentDiv.innerHTML = `
        <input type="text" id="edit-input-${id}" value="${comment.text}">
        <div class="comment-buttons">
            <button onclick="saveEditComment(${id})">저장</button>
            <button onclick="cancelEditComment(${id}, '${comment.text}')">취소</button>
        </div>
    `;
}

// 댓글 수정 저장 함수
function saveEditComment(id) {
    const newText = document.getElementById(`edit-input-${id}`).value;
    if (newText) {
        comments = comments.map(comment =>
            comment.id === id ? { ...comment, text: newText } : comment
        );
        renderComments();
    }
}

// 댓글 수정 취소 함수
function cancelEditComment(id, originalText) {
    renderComments();
}

// 댓글 렌더링 함수
function renderComments() {
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.id = `comment-${comment.id}`;
        commentDiv.className = 'comment'; // 클래스 이름 추가
        commentDiv.innerHTML = `
            <span class="comment-text">${comment.text}</span>
            <span class="comment-buttons">
                <button onclick="showDeleteDialog(${comment.id})">삭제</button>
                <button onclick="startEditComment(${comment.id})">수정</button>
            </span>
        `;
        commentsList.appendChild(commentDiv);
    });
}

// 이벤트 리스너 추가
submitButton.addEventListener("click", addComment);
confirmDeleteButton.addEventListener("click", deleteComment);
cancelDeleteButton.addEventListener("click", cancelDelete);