import { cashdrawer } from '@posx/imin-cashdrawer';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    cashdrawer.echo({ value: inputValue })
}
