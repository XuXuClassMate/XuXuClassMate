document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('show');
        });

        // 点击导航链接时关闭菜单
        const links = navLinks.getElementsByTagName('a');
        Array.from(links).forEach(link => {
            link.addEventListener('click', function() {
                mobileNavToggle.classList.remove('active');
                navLinks.classList.remove('show');
            });
        });

        // 点击菜单外部时关闭菜单
        document.addEventListener('click', function(event) {
            if (!mobileNavToggle.contains(event.target) && !navLinks.contains(event.target)) {
                mobileNavToggle.classList.remove('active');
                navLinks.classList.remove('show');
            }
        });
    }
});