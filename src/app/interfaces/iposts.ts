import { IBase } from "./ibase";
import { ITheme } from "./itheme";
import { IUsers } from "./iusers";

export interface IPosts extends IBase {
    likes: [];
    text: string;
    userId: IUsers;
    themeId: ITheme;
}
