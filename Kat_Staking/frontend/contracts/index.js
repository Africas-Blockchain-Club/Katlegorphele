export const CONTRACT_ADDRESS = "0x43B96E5BA08EA248DDC52b9A060424fA895E8F88";
export const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "positionId",
				"type": "uint256"
			}
		],
		"name": "closePosition",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numDays",
				"type": "uint256"
			}
		],
		"name": "stakeEther",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "currentPositionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numDays",
				"type": "uint256"
			}
		],
		"name": "getInterestRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLockPeriods",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "positionId",
				"type": "uint256"
			}
		],
		"name": "getPositionById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "walletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "createdDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "unlockDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "percentInterest",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "WeiStaked",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "WeiInterest",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "open",
						"type": "bool"
					}
				],
				"internalType": "struct Staking.Position",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			}
		],
		"name": "getPositionIdForAddress",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lockPeriods",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "positionIdByAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "positions",
		"outputs": [
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "createdDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlockDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "percentInterest",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "WeiStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "WeiInterest",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "open",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tiers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];