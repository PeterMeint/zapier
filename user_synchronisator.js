var remaining = '';
var info_fields = {};
var end_pos = inputData.userInfo.length;
var repeat = true;

while(repeat) {
    var field_name = '';
    var field_value = '';
    var info_field = {};
    if (remaining.length > 0) {
        field_name = remaining.slice(remaining.indexOf('name:') + 6, remaining.indexOf('subtype:'));
        remaining = remaining.substring(remaining.indexOf('subtype:') + 6);
    } else {
        field_name = inputData.userInfo.slice(inputData.userInfo.indexOf('name:') + 5, inputData.userInfo.indexOf('subtype:'));
        remaining = inputData.userInfo.substring(inputData.userInfo.indexOf('subtype:') + 6);
    }
    field_name = field_name.replace(/\n/g,'');
    if (remaining.indexOf('name:') >= 0) {
        end_pos = remaining.indexOf('name:');
    } else {
        end_pos = remaining.length;
    }
    field_value = remaining.slice(remaining.indexOf('value:') + 7, end_pos);
    field_value = field_value.replace(/\n/g,'');
    info_fields[field_name] = field_value;

    remaining = remaining.substring(end_pos);

    if(!parseInt(remaining.length) > 0) {
        repeat = false;
    }
}

return {Profielveld: info_fields};
