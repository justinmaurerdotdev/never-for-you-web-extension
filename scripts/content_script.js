function click_following() {
    const el = document.querySelector('[data-testid="ScrollSnap-List"] > div:last-child a');
    el.click();
}
if (document.readyState === "complete") {
    click_following();
} else {
    document.onreadystatechange = function() {
        click_following();
    };
}
