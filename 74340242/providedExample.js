// Using let because this data set will constantly be changing and updating
// Hook in to updating this dataSet when reordering table
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
const ReMapDataSet = (memberName) => {
    // If you have this board_order num already, that would what this is getting
    const MemberCurrPosition = GetPosition(memberName);
    console.log(MemberCurrPosition);
    // Remap the data set with the new board_order positions
    const MappedDataSet = dataSet.map((data) => {
        const UpdatedData = data;
        // If current position is lower than member going to top, we want to increase this person's position
        if (data.board_order < MemberCurrPosition)
            UpdatedData.board_order = Number(data.board_order) + 1;
        // If member is the one going to the top, we want to set their position to 1
        if (data.member == memberName) UpdatedData.board_order = 1;
        return UpdatedData;
    });
    // Remove the changing index from the mapped array
    MappedDataSet.splice(MemberCurrPosition - 1, 1);
    // Shift the new member to the top of the mapped array
    MappedDataSet.unshift(dataSet[MemberCurrPosition - 1]);
    return MappedDataSet;
};
// Example calling
dataSet = ReMapDataSet('Carl');