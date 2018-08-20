import { LuaObj} from "@wowts/lua";

export class Recount {
    public db: { profile: { CurDataSet: any }} = {profile: { CurDataSet: {}}};
    public db2: { combatants: LuaObj<string> } = { combatants: {}};
    public Group(name: string) {
    }
    public AddModeTooltip(key: string, modes: any, tooltips: any, a: any, b: any, c: any, d: any): void {
    }
    public AddAmount(source: string, key: string, value: number) {
    }
}

const lib = new Recount();
export default lib;
