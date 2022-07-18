import { IBase } from "./ibase";
import { ITheme } from "./itheme";
import { IUser } from "./iuser";

export interface IPost extends IBase {
    likes: string[];
    text: string;
    userId: IUser;
    themeId: ITheme;
}
