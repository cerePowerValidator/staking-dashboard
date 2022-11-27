"use strict";(self.webpackChunkpolkadot_staking_dashboard=self.webpackChunkpolkadot_staking_dashboard||[]).push([[155],{8155:o=>{o.exports=JSON.parse('{"pages":{"overview":{"nominator_limit":"\u5df2\u8fbe\u5230\u63d0\u540d\u4eba\u6570\u4e0a\u9650","maximum_allowed":"\u5df2\u8fbe\u5230\u63d0\u540d\u4eba\u6570\u4e0a\u9650\u3002\u8bf7\u7b49\u5f85\u53ef\u7528\u7684\u540d\u989d","limit_reached":"%\u63d0\u540d\u4eba\u9650\u989d\u5df1\u88ab\u8fbe\u5230","maximum_amount":"\u63d0\u540d\u4eba\u6570\u63a5\u8fd1\u6700\u9ad8\u3002\u63d0\u540d\u4eba\u4e0a\u9650\u76ee\u524d\u4e3a","pools_are_active":"\u4e2a\u63d0\u540d\u6c60\u6d3b\u8dc3\u4e2d","available_to_join":"\u5728{{networkName}}\u7f51\u7edc\u4e2d\u53ef\u53c2\u4e0e\u7684\u6c60\u6570","in_pools":"\u5f53\u524d\u8d28\u62bc\u5728\u63d0\u540d\u6c60\u4e2d","bonded_in_pools":"\u63d0\u540d\u6c60\u4e2d\u5f53\u524d\u8d28\u62bc\u7684{{networkUnit}}\u603b\u6570","pool_members_bonding":"\u540d\u6210\u5458\u6b63\u5728\u63d0\u540d\u6c60\u6d3b\u8dc3\u8d28\u62bc\u4e2d.","total_num_accounts":"\u5df2\u52a0\u5165\u63d0\u540d\u6c60\u7684\u5e10\u6237\u603b\u6570.","minimum_nominator_bond":"\u63d0\u540d\u4eba\u62b5\u62bc\u989d\u6700\u4f4e\u4e3a","minimum_bonding_amount":"\u5728{{networkName}}\u63d0\u540d\u6700\u4f4e\u7ed1\u5b9a\u989d\u4e3a","currently_staked":"{{networkUnit}}\u4e2d\u7684{{supplyAsPercent}}% \u76ee\u524d\u5df1\u88ab\u62b5\u62bc.","staking_on_the_network":"\u5171 {{lastTotalStakeBase}} {{networkUnit}}\u5728\u7f51\u7edc\u4e2d\u88ab\u6d3b\u8dc3\u62b5\u62bc\u4e2d","network_stats":"\u7f51\u7edc\u4fe1\u606f","historical_rewards_rate":"\u5386\u53f2\u5956\u52b1\u7387","inflation":"\u901a\u8d27\u81a8\u80c0","supply_staked":"\u62b5\u62bc\u6bd4\u4f8b","active_era":"\u6d3b\u8dc3 Era","total_nominators":"\u63d0\u540d\u4eba\u603b\u6570","active_nominators":"\u6d3b\u8dc3\u63d0\u540d\u4eba","address_copied":"\u5730\u5740\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f","no_account_connected":"\u672a\u8fde\u63a5\u5e10\u6237","in_pool":"\u63d0\u540d\u6c60\u4e2d","available":"\u53ef\u7528","unlocking":"\u6b63\u5728\u89e3\u9501","nominating":"\u63d0\u540d\u4e2d","balance":"\u4f59\u989d","overview":"\u6982\u8ff0","recent_payouts":"\u6700\u8fd1\u6536\u76ca","subscan_disabled":"Subscan\u5df1\u65ad\u5f00","not_staking":"\u65e0\u62b5\u62bc","reserved":"\u5df1\u50a8\u5907"},"favorites":{"fetching_favorite_validators":"\u6b63\u5728\u83b7\u53d6\u6536\u85cf\u5939\u7684\u9a8c\u8bc1\u4eba...","no_favorites":"\u65e0\u6536\u85cf\u5939","favorite_validators":"\u85cf\u5939\u4e2d\u7684\u9a8c\u8bc1\u4eba"},"nominate":{"none":"\u65e0","change":"\u66f4\u6539","pool_nominations":"\u6c60\u7684\u63d0\u540d","nominations":"\u63d0\u540d","stop":"\u505c\u6b62","not_nominating":"\u672a\u63d0\u540d","syncing":"\u6b63\u5728\u540c\u6b65...","your_nominations":"\u60a8\u7684\u63d0\u540d\u540d\u5355","stop_nominating_selected":"\u505c\u6b62\u6307\u5b9a\u9009\u5b9a\u9a8c\u8bc1\u4eba","add_from_favorites":"\u4ece\u6536\u85cf\u5939\u6dfb\u52a0","pool_destroy":"\u63d0\u540d\u6c60\u6b63\u5728\u88ab\u6467\u6bc1\uff0c\u4e0d\u80fd\u505a\u63d0\u540d\u64cd\u4f5c","active_nominations":"\u6d3b\u8dc3\u63d0\u540d\u4eba","inactive_nominations":"\u975e\u6d3b\u8dc3\u63d0\u540d\u4eba","minimum_active_bond":"\u6700\u4f4e\u6d3b\u8dc3\u8d28\u62bc","total_supply_staked":"\u6240\u6709\u62b5\u62bc\u6bd4\u4f8b","controller_not_imported":"\u5c1a\u672a\u5bfc\u5165controller\u5e10\u6237\u3002\u5982\u679c\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5e10\u6237,\u8bf7\u7acb\u5373\u8bbe\u7f6e\u65b0\u5e10\u6237\u3002\u5426\u5219,\u8bf7\u5c06\u8be5\u8d26\u6237\u5bfc\u5165\u6269\u5c55\u4e4b\u4e00","nominate":"\u63d0\u540d","start_nominating":"\u5f00\u59cb\u63d0\u540d","bonded_funds":"\u5df1\u8d28\u62bc\u91d1\u989d","status":"\u72b6\u6001","no_nominations_set":"\u975e\u6d3b\u8dc3\uff1a\u672a\u8bbe\u7f6e\u63d0\u540d","nominating_and":"\u63d0\u540d\u4e2d\u548c","earning_rewards":"\u6323\u53d6\u5956\u52b1\u4e2d","not_earning_rewards":"\u975e\u6323\u53d6\u5956\u52b1\u72b6\u6001","waiting_for_active_nominations":"\u7b49\u5f85\u6709\u6548\u63d0\u540d","reward_destination":"\u5956\u52b1\u94b1\u5305\u5730\u5740","not_assigned":"\u672a\u5206\u914d","update":"\u66f4\u6539","controller_account":"Controller \u8d26\u6237","bond":"\u8d28\u62bc","back_to_staking":"\u56de\u5230Staking","automatically_bonded":"\u5c06\u81ea\u52a8\u8d28\u62bc\u5230\u73b0\u6709\u7684\u8d28\u62bc\u4f59\u989d\u4e2d","to_stash":"\u5230Stash\u8d26\u6237","sent_to_stash":"\u5c06\u4f5c\u4e3a\u4f59\u989d\u53d1\u9001\u5230\u60a8\u7684Stash\u5e10\u6237","to_controller":"\u5230Controller\u8d26\u6237","sent_to_controller":"\u5c06\u4f5c\u4e3a\u4f59\u989d\u53d1\u9001\u5230\u60a8\u7684Controller\u5e10\u6237","summary":"\u603b\u7ed3","read_only":"\u53ea\u8bfb\u5e10\u6237\u65e0\u6cd5\u7b7e\u7f72\u4ea4\u6613.","bond_amount":"\u8d28\u62bc\u91d1\u989d:","back":"\u8fd4\u56de","cancel":"\u53d6\u6d88","search_account":"\u641c\u7d22\u5e10\u6237","none_of_your":"\u60a8\u7684\u6240\u6709\u5e10\u6237\u90fd\u4e0d\u8db3\u6700\u4f4e\u5b58\u6b3e\u989d","top_up_account":"\u4e3a\u8d26\u6237\u5145\u503c,\u4f7f\u5176\u6709\u8d44\u683c\u6210\u4e3acontroller","select_a_controller":"\u60a8\u6ca1\u6709\u5bfc\u5165\u5176\u4ed6\u5e10\u6237\u3002\u5982\u8981\u8981\u9009\u62e9controller,\u8bf7\u5bfc\u5165\u53e6\u4e00\u4e2a\u5e10\u6237\u4f59\u989d\u81f3\u5c11\u4e3a","set_controller_account":"\u8bbe\u7f6eController\u5e10\u6237"},"pools":{"bond":"\u8d28\u62bc","pool_name":"\u63d0\u540d\u6c60\u540d\u79f0","pool_name_support":"\u63d0\u540d\u6c60\u540d\u79f0\u652f\u6301\u5b57\u7b26\u3001\u7b26\u53f7\u548c\u8868\u60c5-\u53d1\u6325\u4f60\u7684\u521b\u610f\u5427!","roles":"\u89d2\u8272","assigned_to_any_account":" \u60a8\u7684<b>\u4e3b\u7406\u4eba</b>\u3001<b>\u63d0\u540d\u4eba</b>\u548c<b>\u72b6\u6001\u5207\u6362\u4eba</b>\u89d2\u8272\u53ef\u4ee5\u5206\u914d\u7ed9\u4efb\u4f55\u5e10\u6237.","pool_creator":" \u4f5c\u4e3a\u63d0\u540d\u6c60\u521b\u5efa\u8005\uff0c\u60a8\u53ef\u4f7f\u7528\u63d0\u540d\u6c60\u7684<b>\u5b58\u6b3e\u4eba</b>\u89d2\u8272","summary":"\u603b\u7ed3","read_only":"\u53ea\u8bfb\u5e10\u6237\u65e0\u6cd5\u7b7e\u7f72\u4ea4\u6613","bond_amount":"\u8d28\u62bc\u91d1\u989d","nominations":"\u63d0\u540d","assigned":"\u5df1\u5206\u914d","create_pool":"\u521b\u5efa\u63d0\u540d\u6c60","create_a_pool":"\u521b\u5efa\u63d0\u540d\u6c60","back":"\u8fd4\u56de","cancel":"\u53d6\u6d88","fetching_favorite_pools":"\u6b63\u5728\u83b7\u53d6\u6536\u85cf\u8868\u4e2d\u7684\u63d0\u540d\u6c60...","favorites_list":"\u6536\u85cf\u5939\u5217\u8868","no_favorites":"\u65e0\u6536\u85cf\u5939","generate_nominations":"\u751f\u6210\u63d0\u540d","nominate":"\u63d0\u540d","withdraw_funds":"\u53d6\u6b3e","unbond_funds":"\u89e3\u9664\u8d28\u62bc\u8d44\u91d1","been_claimed":"\u5df2\u88ab\u7533\u9886","been_claimed_by":"\u6210\u5458\u5df2\u7533\u9886\u5956\u52b1{{unit}}\u603b\u6570","available_to_claim":"\u6210\u5458\u53ef\u7533\u9886\u7684\u5956\u52b1{{unit}}\u91d1\u989d","outstanding_reward":"\u672a\u7533\u9886\u5956\u52b1.","locked":"\u5df1\u9501","destroying":"\u9500\u6bc1\u4e2d","open":"\u6253\u5f00","pool_state":"\u63d0\u540d\u6c60\u72b6\u6001","pool_members":"\u6210\u5458","total_bonded":"\u603b\u7ed1\u5b9a\u91d1\u989d","pool_stats":"\u63d0\u540d\u6c60\u4fe1\u606f","active_pools":"\u6d3b\u8dc3\u63d0\u540d\u6c60","minimum_create_bond":"\u6700\u5c0f\u5efa\u63d0\u540d\u6c60\u8d28\u62bc","minimum_join_bond":"\u6700\u4f4e\u5165\u63d0\u540d\u6c60\u8d28\u62bc\u91d1","pool_membership":"\u63d0\u540d\u6c60\u6210\u5458\u540d\u5355","not_in_pool":"\u4e0d\u5728\u63d0\u540d\u6c60\u4e2d","owner_of_pool":"\u63d0\u540d\u6c60\u6240\u6709\u8005","in_pool":"\u63d0\u540d\u6c60\u4e2d","leave":"\u79bb\u5f00","manage":"\u7ba1\u7406","withdraw":"\u63d0\u53d6","inactive_pool_not_nominating":"\u975e\u6d3b\u8dc3\uff1a\u63d0\u540d\u6c60\u672a\u63d0\u540d\u4efb\u4f55\u9a8c\u8bc1\u4eba","nominating_and":"\u63d0\u540d\u4e2d\u548c","earning_rewards":"\u6323\u53d6\u5956\u52b1\u4e2d","not_earning_rewards":"\u975e\u6323\u53d6\u5956\u52b1\u72b6\u6001","waiting_for_active_nominations":"\u7b49\u5f85\u6709\u6548\u63d0\u540d","unclaimed_rewards":"\u5f85\u7533\u9886\u5956\u52b1","pool_status":"\u63d0\u540d\u6c60\u72b6\u6001","create":"\u521b\u5efa","join":"\u52a0\u5165","leaving_pool":"\u79bb\u5f00\u63d0\u540d\u6c60\u4e2d","member_of_pool":"\u63d0\u540d\u6c60\u6210\u5458","destroy_pool":"\u9500\u6bc1\u63d0\u540d\u6c60","left_the_pool":"\u6240\u6709\u6210\u5458\u5df2\u79bb\u5f00","stop_nominating":"\u5982\u9700\u7ee7\u7eed\u9500\u6bc1\u6c60\uff0c\u8bf7\u5148\u505c\u6b62\u63d0\u540d","close_pool":"\u53ef\u63d0\u53d6\u5df1\u89e3\u9501\u91d1\u989d\u5e76\u5173\u95ed\u6c60","unbond_your_funds":"\u53ef\u89e3\u9501\u8d44\u91d1\u8d28\u62bc","withdraw_unlock":"\u8bf7\u53d6\u51fa\u5df1\u89e3\u9501\u91d1\u989d\u4ee5\u7ee7\u7eed\u5173\u95ed\u6c60","unbond":"\u89e3\u9664\u8d28\u62bc","overview":"\u6982\u8ff0","members":"\u6210\u5458","all_pools":"\u6240\u6709\u63d0\u540d\u6c60","favorites":"\u6536\u85cf\u5939","pools":"\u63d0\u540d\u6c60","all_roles":"\u6240\u6709\u89d2\u8272","bonded_funds":"\u5df1\u8d28\u62bc\u91d1\u989d","pool_member":"{{count}} \u4e2a\u6210\u5458","pool_currently_locked":"\u8be5\u63d0\u540d\u6c60\u5f53\u524d\u6b63\u5904\u4e8e\u9501\u5b9a\u72b6\u6001","permission_to_unbond":"\u60a8\u6709\u6743\u89e3\u9664\u548c\u53d6\u51fa\u63d0\u540d\u6c60\u91cc\u4efb\u4f55\u6210\u5458\u7684\u8d44\u91d1\u3002\u4f7f\u7528\u6210\u5458\u83dc\u5355","management_options":"\u9009\u62e9\u7ba1\u7406\u9009\u9879.","pool_in_destroying_state":"\u8be5\u63d0\u540d\u6c60\u6b63\u5904\u4e8e\u9500\u6bc1\u72b6\u6001","not_set":"\u672a\u8bbe\u7f6e","address_invalid":"\u5730\u5740\u65e0\u6548","reformatted":"\u5730\u5740\u5df2\u91cd\u65b0\u683c\u5f0f\u5316","save":"\u4fdd\u5b58","edit":"\u7f16\u8f91","root":"\u4e3b\u7406\u4eba","depositor":"\u5b58\u6b3e\u4eba","nominator":"\u63d0\u540d\u4eba","state_toggler":"\u72b6\u6001\u5207\u6362\u4eba"},"community":{"fetching_validators":"\u6b63\u5728\u83b7\u53d6\u9a8c\u8bc1\u4eba\u4fe1\u606f...","no_validators":"\u4e0d\u5305\u542b\u9a8c\u8bc1\u4eba","connecting":"\u8fde\u63a5\u4e2d...","go_back":"\u8fd4\u56de","website":"\u4e2a\u4eba\u7f51\u7ad9","email":"\u90ae\u7bb1","bio":"\u7b80\u4ecb","validators":"\u7684\u9a8c\u8bc1\u4eba","validator":"{{count}} \u4e2a\u9a8c\u8bc1\u4eba"},"payouts":{"pool_claim":"\u63d0\u540d\u6c60\u6536\u76ca","payout":"\u6536\u76ca","slashed":"\u9664\u540d","none":"\u65e0","recent_payouts":"\u6700\u8fd1\u6536\u76ca","subscan_disabled":"Subscan\u5df1\u65ad\u5f00","last_era_payout":"\u4e0aEra\u6536\u76ca","payout_history":"\u6536\u76ca\u8bb0\u5f55","not_staking":"\u65e0\u62b5\u62bc","from_pool":"\u4ece\u63d0\u540d\u6c60","deducted_from_bond":"\u4ece\u8d28\u62bc\u91cc\u6263\u9664"},"validators":{"average_commission":"\u5e73\u5747\u4f63\u91d1","active_validators":"\u6d3b\u8dc3\u9a8c\u8bc1\u4eba","total_validators":"\u6240\u6709\u9a8c\u8bc1\u4eba","network_validators":"\u9a8c\u8bc1\u4eba\u5217\u8868","connecting":"\u8fde\u63a5\u4e2d...","fetching_validators":"\u6b63\u5728\u83b7\u53d6\u9a8c\u8bc1\u4eba\u4fe1\u606f..."}}}')}}]);