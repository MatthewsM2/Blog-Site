function uptime() {
    console.log("hello hai");
    if(localStorage.uptime) return;
    const time = Date.now;
    console.log(time);
    localStorage.setItem('uptime',time);
}