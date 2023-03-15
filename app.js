/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openDropdown() {
    document.querySelector("#myDropdown").classList.toggle("show");
}

let myArr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
]

function handleSelectImage(id) {
    myArr.forEach((i, idx) => {
      let img = document.querySelector(`#avatar${idx}`)
      img.classList.remove('avatarImageSelected')
    })
    let newselect = document.querySelector(`#avatar${id}`)
    newselect.classList.add('avatarImageSelected')
}


let dropdown = document.querySelector('.dropAvatars')
for (let i = 0; i < myArr.length; i++) {
    let item = `<img id='avatar${i}' onclick='handleSelectImage(${i})' class='dropdown-item' src='${myArr[i]}' />`
    // avatarImgList.push(item)
    dropdown.innerHTML += item
}