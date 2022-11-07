let dataSet = [{
        member: 'John',
        board_order: '1',
    },
    {
        member: 'Paul',
        board_order: '2',
    },
    {
        member: 'Marc',
        board_order: '3',
    },
    {
        member: 'Rob',
        board_order: '4',
    },
    {
        member: 'Carl',
        board_order: '5',
    },
];

// Get our current position for user
const GetPosition = (memberName) => {
    return Number(
        dataSet.filter((dataObj) => {
            if (dataObj.member === memberName) return true;
        })[0].board_order
    );
};

// Remap values
const RemapDataSet = (memberName, newPosition) => {
    const MappedDataSet = dataSet;
    // If you have this board_order num already, that would what this is getting
    const MemberCurPosition = GetPosition(memberName);
    // Switch the board position properties
    MappedDataSet[MemberCurPosition - 1].board_order = newPosition;
    MappedDataSet[newPosition - 1].board_order = MemberCurPosition;
    // Resort the array to be back in order
    const Sorted = MappedDataSet.sort((member1, member2) => {
        if (Number(member1.board_order) < Number(member2.board_order)) {
            return -1;
        }
        if (Number(member1.board_order) > Number(member2.board_order)) {
            return 1;
        }
        // member1 & member2 are the same
        return 0;
    });
    return Sorted;
};
console.log(dataSet);
// Example dataSet update from event trigger
dataSet = RemapDataSet('Carl', 2);
console.log(dataSet);
// Example dataSet update from event trigger
dataSet = RemapDataSet('Marc', 5);
console.log(dataSet);