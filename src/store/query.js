function joinRowSql(obj) {
   return obj.left && obj.right ?
       `"${obj.left.split('.')[0]}"."${obj.left.split('.')[1]}"` +
        ` = "${obj.right.split('.')[0]}"."${obj.right.split('.')[1]}"`
       : '';
}
function fromRowSql(obj, index) {
    if (index > 0) {
        let joinSql = obj.onList.map(item => {
            return joinRowSql(item);
        }).join(' AND ');
        return `${obj.joinType.toUpperCase()} "${obj.tableName}" AS "${obj.alias}" ON ${joinSql}`;
    }
    return `"${obj.tableName}" AS "${obj.alias}"`;
}

export function fromSql(list) {
    let temp = 'FROM\n  ';
    temp += list.filter(item => item.tableName).map((item, index) => {
        return fromRowSql(item, index);
    }).join('\n  ');
    return temp;
}
//较容易
function selectRowSql(obj) {
    console.log(obj)
    return obj.field == '*' ? '*'
        : `"${obj.field.split('.')[0]}".${obj.field.split('.')[1] == '*' ? '*' : `"${obj.field.split('.')[1]}"`}`;
}
export function selectSql(list) {
    let temp = '\nSELECT\n  ';
    return temp += list.filter(item => item.field).map(item => {
        return selectRowSql(item);
    }).join(', ')
}
//较容易
function whereRowSql(obj) {
    return `"${obj.field.split('.')[0]}"."${obj.field.split('.')[1]}" ${obj.operator} '${obj.value}'`
}

export function whereSql(list) {
    let temp = 'WHERE\n  ';
    return temp += list.filter(item => item.field && item.operator && item.value).map(item => {
        return whereRowSql(item);
    }).join('\n  AND  ')
}