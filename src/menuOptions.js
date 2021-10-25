export const assetManagementMenu = [
  {
      title: 'Schedule Management',
      items: [
        {
          item: 'Manage Schedule', 
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetMaintenanceFilter.do?action=initial&searchType=1&dashboardSearchOpen=true&dbSearchFrom=assetMaint'
          
        },
        {
          item: 'Asset Master Search',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/titleSearch.do?assetSearch.availsScheduleId=0&assetSearch.availsScheduleName=n/a'
        },
        {
          item: 'Stunt Management',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetStuntList.do'
        },
        {
          item: 'Franchise Management',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetMasterMaintenance.do?action=franchiseManagement'
        },
        {
          item: 'My Lock Manager',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/locks/myLockManager.jsp'
        }
      ]
    },
    {
      title: 'OPS Review',
      items: [
        {
          item: 'XML Bulk Review',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/ops/availsAssetMaintenanceOpsTab.do?action=initial&scheduleMode=OPS&dashboardSearchOpen=true&mode=bulkReview',
        },
        {
          item: 'XML Review',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/ops/availsAssetMaintenanceOpsTab.do?action=initial&scheduleMode=OPS&dashboardSearchOpen=true',
        },
        {
          item: 'EST Ops Review',
          link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetMaintenanceTab.do?action=opsRev&scheduleMode=CMSESTOPS',
        }
      ]
    },
    {
      title: 'Avails Management', 
      items: [	
        {
          item: 'Pre Avails Upload',
          link: 'http://ind-prod-app-09:8089/avails/availsdataload/?n=bmh1bnRlcg%3D%3D'
        },
        {
          item: 'Incomplete Avails',
          link: 'http://ind-prod-app-09:8089/avails/incompleteavails/#/?n=bmh1bnRlcg%3D%3D'
        },
        {
          item: 'Avails Management',
          link: 'http://ind-prod-app-09:8089/avails/availsmanagement/#/?n=bmh1bnRlcg%3D%3D'
        },
        {
          item: 'Planner Management',
          link: 'http://ind-prod-app-09:8089/avails/planner/#/?n=bmh1bnRlcg%3D%3D'
        }
      ]
    },
    {
      title: 'Miscellaneous', 
      items: [	
        {
          item: 'Active Avails Listing',
          link: ''
        },
        {
          item: 'Incomplete Avails',
          link: ''
        },
        {
          item: 'Programming Review',
          link: ''
        },
        {
          item: 'Programming Collapse View',
          link: ''
        },
        {
          item: 'Mass CBP-Replacement',
          link: ''
        },
        {
          item: 'EST Pricing Upload',
          link: ''
        }
      ]
    },
    {
      title: 'Inventory Management', 
      items: [	
        {
          item: 'Inventory Management',
          link: ''
        },
        {
          item: 'MAM Search',
          link: ''
        },
        {
          item: 'MAM File Restore Queue',
          link: ''
        },
        {
          item: 'MAM File Status',
          link: ''
        },
        {
          item: 'CC File Management',
          link: ''
        },
        {
          item: 'Engineering Review',
          link: ''
        },
        {
          item: 'Timed MDU Management',
          link: ''
        }
      ]
    },
    {
      title: 'Mass Update Management', 
      items: [	
        {
          item: 'Worksheet Management',
          link: ''
        },
      ]
    },
    {
      title: 'Category/People Management', 
      items: [	
        {
          item: 'Category Setup',
          link: ''
        },
        {
          item: 'Category Groups',
          link: ''
        },        
        {
          item: 'Actor/Director Setup',
          link: ''
        },
      ]
    },
    {
      title: 'Manual QC', 
      items: [	
        {
          item: 'My Queue',
          link: ''
        },
        {
          item: 'Manager Queue',
          link: ''
        },        
        {
          item: 'Distribution Queue',
          link: ''
        },
        {
          item: 'Watch Tower',
          link: ''
        },
      ]
    },
    {
      title: 'PPV Scheduling', 
      items: [	
        {
          item: 'PPV Deck Avail Listing',
          link: ''
        },
        {
          item: 'Play Manager',
          link: ''
        },        
        {
          item: 'Hot Choice Prelim Creation',
          link: ''
        },
        {
          item: 'Manage PPV Schedule',
          link: ''
        },
        {
          item: 'Scheduler',
          link: ''
        },
        {
          item: 'Reports',
          link: ''
        },
      ]
    },
]




// export const assetManagementMenu = {
//       'Schedule Management': [
//         {
//           item: 'Manage Schedule', 
//           link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetMaintenanceFilter.do?action=initial&searchType=1&dashboardSearchOpen=true&dbSearchFrom=assetMaint'
          
//         },
//         {
//           item: 'Asset Master Search',
//           link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/titleSearch.do?assetSearch.availsScheduleId=0&assetSearch.availsScheduleName=n/a'
//         },
//         {
//           item: 'Stunt Management',
//           link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetStuntList.do'
//         },
//         {
//           item: 'Franchise Management',
//           link: 'http://indab-prg.indemand.com:8080/indabMaint/avails/availsAssetMasterMaintenance.do?action=franchiseManagement'
//         },
//         {
//           item: 'My Lock Manager',
//           link: 'http://indab-prg.indemand.com:8080/indabMaint/locks/myLockManager.jsp'
//         }
//       ],
//       'OPS Review': [
//         {
//           item: 'XML Bulk',
//           link: '',
//         },
//         {
//           item: 'XML Review',
//           link: '',
//         },
//         {
//           item: 'EST Ops Review',
//           link: '',
//         }
//       ],
//       'Avails Management': [	
//         {
//           item: 'Pre Avails Upload',
//           link: ''
//         },
//         {
//           item: 'Incomplete Avails',
//           link: ''
//         },
//         {
//           item: 'Avails Management',
//           link: ''
//         },
//         {
//           item: 'Planner Management',
//           link: ''
//         }
//       ]
// }