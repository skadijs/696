import tButton  from "./button/index";
import mSelect  from "./select/index";
const install = app =>{
    app.use(tButton),
    app.use(mSelect)
}
const TUI ={
    install
}
export { tButton, mSelect}
export default TUI