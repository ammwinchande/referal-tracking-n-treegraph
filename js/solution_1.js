// Global constants which can read from certain config file/db/api
const REFERENCE_AMOUNT = 5000;
const INDIRECT_REFERENCE_RATE = 0.05 * REFERENCE_AMOUNT;

/**
 * Calculates a referral amount to be paid to customer
 *
 * @param custName, numOfDirectReferrals, numOfIndirectReferrals
 *
 * @return string
 */
function calculateActualReferralCredit(custName = "Untitled", numOfDirectReferrals = 0, numOfIndirectReferrals = 0) {
    console.log(custName.toUpperCase() + " Referral Breakdown \n");

    console.log("Number of Direct Referrals: " + numOfDirectReferrals);
    console.log("Number of Indirect Referrals: " + numOfIndirectReferrals + "\n");

    let totalReferralCredit = 0;
    let referralResultStatement = "Total Actual Referral Credit = TZS ";

    if (numOfDirectReferrals === 0) {
        return "No reference made, Total Referral Credit = TZS " + totalReferralCredit;
    } else {
        if (numOfIndirectReferrals !== 0) {
            return referralResultStatement + (numOfDirectReferrals * REFERENCE_AMOUNT + INDIRECT_REFERENCE_RATE * numOfIndirectReferrals);
        }
        return referralResultStatement + (numOfDirectReferrals * REFERENCE_AMOUNT);
    }

}

console.log("SOLUTION 1 RESULT");

// calling calculateActualReferralCredit with correct params, name is required
let actualReferralCredit_customerA = calculateActualReferralCredit("customer a", 1, 1);
console.log(actualReferralCredit_customerA);

// calling calculateActualReferralCredit with correct params, name is required
let actualReferralCredit_customerB = calculateActualReferralCredit("customer b", 1);
console.log(actualReferralCredit_customerB);