import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node';

import Configjson from '../../../../../Config.json' with { type: 'json' };

let StartFunc = ({ inFileName }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/Transactions/${inFileName}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return db;
};

export { StartFunc };
