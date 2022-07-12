import { IBase } from "./ibase";
import { IPosts } from "./iposts";
import { IUsers } from "./iusers";

export interface ITheme extends IBase {
    themeName: string;
    subscribers: [];
    posts: IPosts[];
    userId: IUsers;
}
