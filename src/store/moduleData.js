const alias = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y', 'z'
                ];
export default {
    state: () => ({
        queryForm: {
            from: [{
                tableName: '',
                alias: ''
            }],
            select: [],
            where: []
        },
        i: 0
    }),
    mutations: {

    },
    getters: {
        query: state => type => {
            console.log(state,type)
        },
        getAlias: state => () => {
            return alias[state.i++];
        }
    }
}