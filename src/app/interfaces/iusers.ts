import { IBase } from "./ibase";
import { IPosts } from "./iposts";
import { ITheme } from "./itheme";

export interface IUsers extends IBase {
    themes: ITheme[];
    posts: IPosts[];
    tel: string;
    email: string;
    username: string;
    password: string;
}
