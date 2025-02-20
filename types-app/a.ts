const x: number = 1;
console.log(x);

function delayedCall(fn: () => void):void {
    setTimeout(fn,1000);
}

type userRoles = "admin"|"editor"|"viewer";
type permissions = "read"|"write"|"delete";

const userpermission: Record<userRoles, permissions> = {
admin: "delete",
editor:"write",
viewer:"read",
};

console.log(userpermission.admin);

for (const key in userpermission) {
    console.log(`${key}: ${userpermission[key]}`);
  }
const userRoles = new Map<string,string>();
userRoles.set("admin","delete");
userRoles.set("editor","write");
userRoles.set("viewer","read");

console.log(userRoles.get("admin"));
console.log(userRoles.has("editor"));

for(const [role,permissions] of userRoles){
    console.log(`${role}: ${permissions}`);
}
function swap<T1,T2>(v1:T1, v2:T2):[T2,T1]{
    return [v2,v1];
}