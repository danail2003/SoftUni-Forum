import { IBase } from "./ibase";
import { ITheme } from "./itheme";
import { IUser } from "./iuser";

export interface IPost extends IBase {
    likes: [];
    text: string;
    userId: IUser;
    themeId: ITheme;
}
