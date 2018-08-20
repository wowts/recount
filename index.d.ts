import { LuaObj } from "@wowts/lua";
export declare class Recount {
    db: {
        profile: {
            CurDataSet: any;
        };
    };
    db2: {
        combatants: LuaObj<string>;
    };
    Group(name: string): void;
    AddModeTooltip(key: string, modes: any, tooltips: any, a: any, b: any, c: any, d: any): void;
    AddAmount(source: string, key: string, value: number): void;
}
declare const lib: Recount;
export default lib;
