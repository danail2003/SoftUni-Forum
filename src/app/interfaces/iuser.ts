import { IBase } from "./ibase";
import { IPost } from "./ipost";
import { ITheme } from "./itheme";

export interface IUser extends IBase {
    themes: ITheme[];
    posts: IPost[];
    tel: string;
    email: string;
    username: string;
    password: string;
}
