import { IBase } from "./ibase";
import { IPost } from "./ipost";
import { IUser } from "./iuser";

export interface ITheme extends IBase {
    themeName: string;
    subscribers: string[];
    posts: IPost[];
    userId: IUser;
}
