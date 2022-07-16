import { IBase } from "./ibase";
import { IPost } from "./ipost";
import { IUser } from "./iuser";

export interface ITheme extends IBase {
    themeName: string;
    subscribers: [];
    posts: IPost[];
    userId: IUser;
}
