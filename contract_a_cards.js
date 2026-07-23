// Principles of Contract A Flashcards Data (Victorian / Australian Jurisdiction)
// Custom format: Front = Case Name & Court | Back = Facts -> Ruling -> Key Principle (Aside)

window.CONTRACT_A_DECKS = {
  1: { name: "Topic 1: Offer & Revocation", badge: "Offer" },
  2: { name: "Topic 2: Acceptance & Communication", badge: "Acceptance" },
  3: { name: "Topic 3: Consideration & Bargain Rule", badge: "Consideration" },
  4: { name: "Topic 4: Intention to Create Legal Relations", badge: "Intention" },
  5: { name: "Topic 5: Certainty & Completeness", badge: "Certainty" },
  6: { name: "Topic 6: Formalities & Part Performance", badge: "Formalities" },
  7: { name: "Topic 7: Privity of Contract & Exceptions", badge: "Privity" },
  8: { name: "Topic 8: Equitable & Promissory Estoppel", badge: "Estoppel" },
  9: { name: "Topic 9: Express Terms & Incorporation", badge: "Express Terms" },
  10: { name: "Topic 10: Construction & Implied Terms", badge: "Implied Terms" },
  11: { name: "Topic 11: Australian Consumer Law (ACL)", badge: "ACL" }
};

window.CONTRACT_A_FLASHCARDS = [
  // --- TOPIC 1: OFFER ---
  {
    id: 101,
    week: 1,
    topic: "Offer",
    court: "HL",
    jurisdiction: "UK House of Lords (Persuasive in Vic)",
    caseName: "Gibson v Manchester City Council (1979 HL)",
    question: "Gibson v Manchester City Council (1979 HL)",
    answer: "**FACTS:**\nManchester City Council wrote to Gibson proposing to sell council housing. Gibson filled out an application form and returned it. A new council administration halted sales, including Gibson's. Gibson sued to enforce the transaction. The Council's letter stated: *\"The Corporation may be prepared to sell... If you would like to make formal application... please complete enclosed application form.\"*\n\n**HELD / RULING:**\nNO OFFER. The words *\"may be prepared to sell\"* and the requirement for a *\"formal application\"* made it impossible to construe the letter as a firm contractual offer.\n\n*(Aside — Key Principle: Wording of an offer must show clear objective intention to be bound, rather than a mere preliminary statement.)*"
  },
  {
    id: 102,
    week: 1,
    topic: "Offer",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Carlill v Carbolic Smoke Ball Co (1893 UKCA)",
    question: "Carlill v Carbolic Smoke Ball Co (1893 UKCA)",
    answer: "**FACTS:**\nCompany advertised a £100 reward to anyone who contracted influenza after using their smoke ball 3 times daily for 2 weeks. The ad stated that £1000 was deposited with Alliance Bank to show sincerity. Mrs Carlill bought and used the smoke ball as directed, but contracted the flu. She claimed the £100; Carbolic refused to pay.\n\n**HELD / RULING:**\nCarbolic must pay the £100 reward.\n1. Objective test: a reasonable person would see the £1000 bank deposit as proof of intent to be bound, not mere sales puff.\n2. An offer can be made to the world at large (unilateral contract).\n3. Buying/using the ball constituted valid acceptance and consideration.\n\n*(Aside — Key Principle: Unilateral offers can be made to the world at large; objective test distinguishes binding offers from mere puff.)*"
  },
  {
    id: 103,
    week: 1,
    topic: "Offer",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Pharmaceutical Society of GB v Boots Cash Chemists (1953 UKCA)",
    question: "Pharmaceutical Society v Boots Cash Chemists (1953 UKCA)",
    answer: "**FACTS:**\nThe Pharmacy and Poisons Act made it illegal to sell scheduled drugs without supervision of a registered pharmacist. Boots operated a self-service store with pharmacists at the checkout. Issue: Was displaying drugs on shelves an offer accepted by a customer placing items in their basket?\n\n**HELD / RULING:**\nGoods on display on shelves are an INVITATION TO TREAT, not an offer. The customer makes the offer at the checkout counter, which the pharmacist can accept or reject.\n\n*(Aside — Key Principle: Display of goods in retail stores is an invitation to treat.)*"
  },
  {
    id: 104,
    week: 1,
    topic: "Offer",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "AGC (Advances) Ltd v McWhirter (1977 NSWSC)",
    question: "AGC (Advances) Ltd v McWhirter (1977 NSWSC)",
    answer: "**FACTS:**\nMortgagee property auction. The vendor (mortgagee) rejected the highest bid submitted by the mortgagor.\n\n**HELD / RULING:**\nVendor had not made an offer to sell despite property being put 'on the market'. An auction announcement is an invitation to treat; bids are offers which the vendor can accept or reject.\n\n*(Aside — Key Principle: Auctions being 'on the market' remain invitations to treat, not offers to sell.)*"
  },
  {
    id: 105,
    week: 1,
    topic: "Offer",
    court: "HL",
    jurisdiction: "UK House of Lords (Persuasive in Vic)",
    caseName: "Harvela Investments v Royal Trust Co of Canada (1986 HL)",
    question: "Harvela Investments v Royal Trust Co (1986 HL)",
    answer: "**FACTS:**\nRoyal Trust invited two shareholders to submit sealed single offers for shares, stating *\"we bind ourselves to accept the highest offer...\"*. Harvela bid $2,175,000 fixed. Outerbridge bid $2.1m OR $101,000 higher than any other offer (referential bid).\n\n**HELD / RULING:**\nRoyal Trust's invitation was a binding offer to sell to the highest fixed bidder. Harvela accepted by submitting the highest explicit price. The referential bid was invalid.\n\n*(Aside — Key Principle: Explicit promissory language can make a request for tenders a binding contractual offer.)*"
  },
  {
    id: 106,
    week: 1,
    topic: "Offer",
    court: "FCA",
    jurisdiction: "Federal Court of Australia (Binding/Persuasive in Vic)",
    caseName: "Hughes Aircraft Systems v Airservices Australia (1997 FCA)",
    question: "Hughes Aircraft Systems v Airservices Australia (1997 FCA)",
    answer: "**FACTS:**\nHughes submitted an unsuccessful tender for air traffic control services to the Civil Aviation Authority (CAA). The formal tender request outlined strict evaluation procedures. Hughes claimed CAA departed from stated evaluation criteria.\n\n**HELD / RULING:**\nValid tender process contract existed. CAA breached contract by failing to evaluate tenders in accordance with its stated criteria.\n\n*(Aside — Key Principle: Formal tender processes can create preliminary binding process contracts governing evaluation rules.)*"
  },
  {
    id: 107,
    week: 1,
    topic: "Offer",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Dickinson v Dodds (1876 UKCA)",
    question: "Dickinson v Dodds (1876 UKCA)",
    answer: "**FACTS:**\nDodds offered to sell land to Dickinson, stating offer open until 9am June 12th. On June 11th, Dodds sold the land to Allan. Dickinson was informed of the sale to Allan by his agent. Dickinson then handed Dodds a formal acceptance before 9am June 12th.\n\n**HELD / RULING:**\nNO contract. Dodds validly revoked the offer by selling to Allan. Revocation is effective once reasonably communicated to offeree, even via a reliable third party.\n\n*(Aside — Key Principle: An offer can be revoked anytime prior to acceptance if revocation is communicated via a reliable source.)*"
  },
  {
    id: 108,
    week: 1,
    topic: "Offer",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Goldsbrough Mort & Co v Quinn (1910 HCA)",
    question: "Goldsbrough Mort & Co v Quinn (1910 HCA)",
    answer: "**FACTS:**\nGoldsbrough paid 5 shillings for an option to purchase land within one week at a specified price. Quinn purported to revoke the offer before the week expired.\n\n**HELD / RULING:**\nQuinn could not withdraw the offer. Paying valuable consideration for an option creates an irrevocable option contract to keep the offer open.\n\n*(Aside — Key Principle: Options supported by consideration hold offers open and cannot be revoked during option period.)*"
  },
  {
    id: 109,
    week: 1,
    topic: "Offer",
    court: "FCAFC",
    jurisdiction: "Full Federal Court (Binding/Persuasive in Vic)",
    caseName: "Mobil Oil Australia v Wellcome International (1998 FCAFC)",
    question: "Mobil Oil Australia v Wellcome International (1998 FCAFC)",
    answer: "**FACTS:**\nMobil announced a 'Circle of Excellence' scheme promising franchise extensions to franchisees achieving 90%+ scores for 6 consecutive years. Franchisees spent money and effort, but Mobil cancelled the scheme after 4 years.\n\n**HELD / RULING:**\nNo offer — statement was too vague and uncertain. Even if an offer existed, Mobil was entitled to revoke a unilateral offer after performance commenced where offerees underwent no extra detriment beyond existing duties.\n\n*(Aside — Key Principle: Unilateral offers can be revoked; no universal rule prevents revocation after performance starts.)*"
  },
  {
    id: 110,
    week: 1,
    topic: "Offer",
    court: "NTSC",
    jurisdiction: "Northern Territory Supreme Court (Persuasive in Vic)",
    caseName: "Fong v Cilli (1968 NTSC)",
    question: "Fong v Cilli (1968 NTSC)",
    answer: "**FACTS:**\nVendor signed contract to sell land, but died before one of the joint purchasers signed. The remaining purchaser had notice of the vendor's death before signing.\n\n**HELD / RULING:**\nOffer lapsed upon the vendor's death because the offeree had notice of death before attempting acceptance.\n\n*(Aside — Key Principle: Death of offeror causes offer to lapse if offeree has notice of death before acceptance.)*"
  },
  {
    id: 111,
    week: 1,
    topic: "Offer",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Laybutt v Amoco Australia (1974 HCA)",
    question: "Laybutt v Amoco Australia (1974 HCA)",
    answer: "**FACTS:**\nLaybutt granted Amoco an option to purchase land shortly before his death. Terms specified option exercise notice must be communicated to \"me\" (Laybutt). Amoco served notice on Laybutt's widow instead of his executor.\n\n**HELD / RULING:**\nOption not validly exercised. Options survive death but must be properly served on the deceased's legal personal representative.\n\n*(Aside — Key Principle: Options survive death of grantor but must be validly exercised against legal successor/executor.)*"
  },
  {
    id: 112,
    week: 1,
    topic: "Offer",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Financings Ltd v Stimson (1962 UKCA)",
    question: "Financings Ltd v Stimson (1962 UKCA)",
    answer: "**FACTS:**\nCustomer signed offer form to purchase a car on hire-purchase terms. Before finance company signed acceptance, the car was stolen from dealer's yard and severely damaged.\n\n**HELD / RULING:**\nOffer could not be accepted. The offer contained an implied condition that the car remain in substantially the same state until acceptance.\n\n*(Aside — Key Principle: An offer lapses upon failure of an implied condition regarding subject matter state.)*"
  },
  {
    id: 113,
    week: 1,
    topic: "Offer",
    court: "QBD",
    jurisdiction: "UK Queen's Bench (Persuasive in Vic)",
    caseName: "Stevenson, Jacques & Co v McLean (1880 QBD)",
    question: "Stevenson, Jacques & Co v McLean (1880 QBD)",
    answer: "**FACTS:**\nMcLean offered to sell iron open until Monday. On Monday morning, buyer telegraphed: *\"Please wire whether you would accept forty for delivery over two months?\"* McLean didn't reply and sold to another buyer. Buyer telegraphed acceptance before receiving notice of sale.\n\n**HELD / RULING:**\nBuyer's telegram was a mere inquiry, not a rejection or counter-offer. Original offer remained open and bindingly accepted.\n\n*(Aside — Key Principle: A mere inquiry is distinguished from a counter-offer and does not reject or terminate the offer.)*"
  },

  // --- TOPIC 2: ACCEPTANCE ---
  {
    id: 114,
    week: 2,
    topic: "Acceptance",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "Fitness First v Chong (2008 NSWSC)",
    question: "Fitness First (Australia) Pty Ltd v Chong (2008 NSWSC)",
    answer: "**FACTS:**\nMrs Chong joined Fitness First gym without reading the contract. Contract contained a $200 cancellation fee clause. She argued she was not bound because she did not read or subjectively agree to the fee.\n\n**HELD / RULING:**\nValid contract. Contract law tests acceptance objectively by external signature/manifestation, not subjective consensus ad idem.\n\n*(Aside — Key Principle: Acceptance is tested objectively based on external manifestations; signing binds party regardless of reading.)*"
  },
  {
    id: 115,
    week: 2,
    topic: "Acceptance",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "The Crown v Clarke (1927 HCA)",
    question: "The Crown v Clarke (1927 HCA)",
    answer: "**FACTS:**\nGovernment offered £1000 reward for info leading to conviction of police murderers. Clarke was arrested for murder and gave info leading to conviction of real killers solely to clear his own name. He later tried to claim reward.\n\n**HELD / RULING:**\nClarke NOT entitled to reward. Acceptance of a unilateral offer must be performed in response to and reliance upon the offer. Presumption of reliance was rebutted by his own testimony.\n\n*(Aside — Key Principle: Performance of unilateral condition must be done in reliance on and response to specified offer.)*"
  },
  {
    id: 116,
    week: 2,
    topic: "Acceptance",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Latec Finance v Knight (1969 NSWCA)",
    question: "Latec Finance v Knight (1969 NSWCA)",
    answer: "**FACTS:**\nKnight signed hire-purchase offer for TV set. Form stated offer not binding until signed by Latec Finance. LF signed form internally, but never communicated acceptance to Knight. Knight returned TV as unsatisfactory.\n\n**HELD / RULING:**\nNO contract. Acceptance must be communicated to offeror. Internal signature without notification was ineffective.\n\n*(Aside — Key Principle: Acceptance requires communication to offeror unless expressly or impliedly dispensed with.)*"
  },
  {
    id: 117,
    week: 2,
    topic: "Acceptance",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "Adams v Lindsell (1818 UK)",
    question: "Adams v Lindsell (1818 UK)",
    answer: "**FACTS:**\nDefendants wrote offering to sell wool to plaintiffs. Offer letter delayed in post. Plaintiffs posted acceptance immediately on receipt. Defendants sold wool elsewhere believing offer ignored.\n\n**HELD / RULING:**\nOffer accepted the moment the letter of acceptance was posted by offeree.\n\n*(Aside — Key Principle: Postal Acceptance Rule: contract complete upon posting letter where post is contemplated method.)*"
  },
  {
    id: 118,
    week: 2,
    topic: "Acceptance",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "Felthouse v Bindley (1862 UK)",
    question: "Felthouse v Bindley (1862 UK)",
    answer: "**FACTS:**\nUncle wrote to nephew negotiating horse purchase: *\"If I hear no more about him, I consider the horse mine at £30 15s...\"* Nephew intended to accept but never replied. Auctioneer accidentally sold horse; uncle sued auctioneer.\n\n**HELD / RULING:**\nNO contract. Acceptance had not been communicated. Offeror cannot force a contract on offeree by stipulating silence as mode of acceptance.\n\n*(Aside — Key Principle: Acceptance cannot be inferred from silence alone.)*"
  },
  {
    id: 119,
    week: 2,
    topic: "Acceptance",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Empirnall Holdings v Machon Paull (1988 NSWCA)",
    question: "Empirnall Holdings Pty Ltd v Machon Paull (1988 NSWCA)",
    answer: "**FACTS:**\nEmpirnall engaged MP for project management. MP sent contract form; Empirnall stated they *\"do not sign contracts\"*. MP proceeded with work stating *\"proceeding on understanding contract accepted\"*. Empirnall allowed work to continue and paid progress invoices.\n\n**HELD / RULING:**\nValid contract. Where offeree with reasonable opportunity to reject goods/services takes benefit of them, conduct constitutes objective acceptance.\n\n*(Aside — Key Principle: Silence PLUS taking benefit of services with opportunity to reject constitutes acceptance.)*"
  },
  {
    id: 120,
    week: 2,
    topic: "Acceptance",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Brambles Holdings v Bathurst City Council (2001 NSWCA)",
    question: "Brambles Holdings v Bathurst City Council (2001 NSWCA)",
    answer: "**FACTS:**\nBrambles operated Council waste depot. Council directed Brambles to increase liquid waste fees and remit extra to Council. Brambles wrote letter denying contract covered liquid waste, but proceeded to charge higher fees while retaining money.\n\n**HELD / RULING:**\nContract formed. Despite initial rejection letter, Brambles' conduct in charging higher fees manifested objective assent to Council's terms.\n\n*(Aside — Key Principle: Subsequent conduct following initial rejection can constitute objective acceptance.)*"
  },
  {
    id: 121,
    week: 2,
    topic: "Acceptance",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Butler Machine Tool v Ex-Cell-O Corp (1977 UKCA)",
    question: "Butler Machine Tool Co v Ex-Cell-O Corp (1977 UKCA)",
    answer: "**FACTS:**\nSeller quoted price for machine, including price variation clause. Buyer ordered on buyer's terms (no price variation clause) with tear-off acknowledgment slip. Seller signed slip but returned letter stating selling *\"in accordance with quotation\"*.\n\n**HELD / RULING:**\nPrice variation clause did not apply. Buyer's order was a counter-offer accepted when seller signed tear-off slip ('last shot' rule).\n\n*(Aside — Key Principle: 'Battle of forms' usually won by 'last shot' submitted without objection.)*"
  },
  {
    id: 122,
    week: 2,
    topic: "Acceptance",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "MacRobertson Miller Airline v Commr of State Tax (1975 HCA)",
    question: "MacRobertson Miller Airline Services v Commissioner of State Taxation (1975 HCA)",
    answer: "**FACTS:**\nAirline passenger reserves seat, pays fare, and receives ticket containing condition giving airline right to cancel flight/booking without liability. Issue: Was ticket an agreement subject to stamp duty at issue date?\n\n**HELD / RULING:**\nTicket did not record a binding agreement at issue. Ticket is an offer/voucher; contract formed only after passenger has reasonable opportunity to read conditions without rejecting.\n\n*(Aside — Key Principle: Issuing passenger tickets with exclusion clauses is an offer/voucher, not a contract at issue.)*"
  },

  // --- TOPIC 3: CONSIDERATION ---
  {
    id: 123,
    week: 3,
    topic: "Consideration",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Australian Woollen Mills v Commonwealth (1954 HCA)",
    question: "Australian Woollen Mills Pty Ltd v Commonwealth (1954 HCA)",
    answer: "**FACTS:**\nCth government announced subsidy scheme on wool purchased by local manufacturers. AWM purchased large quantities of wool. Cth later announced end of subsidy scheme without paying remaining subsidies. AWM sued for unpaid subsidy.\n\n**HELD / RULING:**\nNO contract. Bargain requirement missing. Buying wool was not done in exchange for (quid pro quo) government promise of subsidy; act was a conditional gift policy announcement.\n\n*(Aside — Key Principle: Consideration requires a relation of cause and effect (quid pro quo exchange) between promise and act.)*"
  },
  {
    id: 124,
    week: 3,
    topic: "Consideration",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Beaton v McDivitt (1987 NSWCA)",
    question: "Beaton v McDivitt (1987 NSWCA)",
    answer: "**FACTS:**\nMcDivitt gave land to Beaton rent-free to prevent council imposing higher rates as long as he worked it using permaculture. Beaton worked land for years. Relationship soured; McDivitt ordered Beaton off land.\n\n**HELD / RULING:**\nBeaton's working of the land at McDivitt's request was sufficient consideration, giving rise to an enforceable unilateral contract.\n\n*(Aside — Key Principle: Quid pro quo requirement satisfied by working land at promisor's request.)*"
  },
  {
    id: 125,
    week: 3,
    topic: "Consideration",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "Roscorla v Thomas (1842 UK)",
    question: "Roscorla v Thomas (1842 UK)",
    answer: "**FACTS:**\nRoscorla bought horse from Thomas. After sale completed, Thomas promised horse was sound and free from vice. Horse turned out to be vicious and crazy. Roscorla sued for breach of warranty.\n\n**HELD / RULING:**\nPromise unenforceable. Past consideration (prior purchase of horse) cannot support a subsequent promise.\n\n*(Aside — Key Principle: Past consideration is not good consideration.)*"
  },
  {
    id: 126,
    week: 3,
    topic: "Consideration",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "Lampleigh v Braithwait (1615 UK)",
    question: "Lampleigh v Braithwait (1615 UK)",
    answer: "**FACTS:**\nBraithwait killed a man and asked Lampleigh to ride to see the King to secure a pardon. Lampleigh traveled at considerable personal expense. Afterwards, Braithwait promised to pay Lampleigh £100, but failed to pay.\n\n**HELD / RULING:**\nPromise enforceable. Past services performed at promisor's request with an implied understanding of payment constitute good consideration.\n\n*(Aside — Key Principle: Exception to past consideration: services requested with mutual understanding of compensation are valid consideration.)*"
  },
  {
    id: 127,
    week: 3,
    topic: "Consideration",
    court: "VSCA",
    jurisdiction: "Victorian Court of Appeal (Binding in Vic)",
    caseName: "Ipex Software Services Pty Ltd v Hosking (2000 VSCA)",
    question: "Ipex Software Services Pty Ltd v Hosking (2000 VSCA)",
    answer: "**FACTS:**\nHosking assisted in transferring his IT business to Ipex, assuming he would receive shares in the combined company. After transfer completed, Ipex signed agreement promising Hosking a 5% share stake, but later refused to transfer shares.\n\n**HELD / RULING:**\nHosking's past services provided valid consideration because transfer was performed on mutual understanding of equity compensation.\n\n*(Aside — Key Principle: Past services valid consideration where parties acted on clear understanding services would be paid/remunerated.)*"
  },
  {
    id: 128,
    week: 3,
    topic: "Consideration",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "Stilk v Myrick (1809 UK)",
    question: "Stilk v Myrick (1809 UK)",
    answer: "**FACTS:**\nStilk and 10 sailors agreed to navigate ship. 2 sailors deserted. Captain promised to divide deserters' wages among remaining 9 crew if they navigated ship back home. Captain later refused to pay extra money.\n\n**HELD / RULING:**\nNO consideration. Crew were already legally obligated under original contract to navigate ship home in an emergency.\n\n*(Aside — Key Principle: Performance of an existing legal duty is not good consideration.)*"
  },
  {
    id: 129,
    week: 3,
    topic: "Consideration",
    court: "HL",
    jurisdiction: "UK House of Lords (Persuasive in Vic)",
    caseName: "Foakes v Beer (1884 HL)",
    question: "Foakes v Beer (1884 HL)",
    answer: "**FACTS:**\nBeer obtained court judgment against Foakes for debt. Foakes legally obliged to pay immediately. Beer agreed in writing to accept debt in instalments without interest. After full debt paid, Beer sued for statutory interest.\n\n**HELD / RULING:**\nFoakes gave no good consideration for promise to forgive interest. Part payment of a debt on due date is not satisfaction for whole debt (Pinnel's Rule).\n\n*(Aside — Key Principle: Existing legal duty / part payment of debt is not good consideration for forgiving remainder or interest.)*"
  },
  {
    id: 130,
    week: 3,
    topic: "Consideration",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "Hartley v Ponsonby (1857 UK)",
    question: "Hartley v Ponsonby (1857 UK)",
    answer: "**FACTS:**\nHartley and crew worked Ponsonby's ship. 17 out of 36 crew deserted. Ponsonby offered extra £40 to remaining crew to sail to next port. Upon arrival, Ponsonby refused to pay.\n\n**HELD / RULING:**\nPromisor bound. Extreme desertion made voyage so hazardous that crew were no longer bound by original contract. Performing work under dangerous conditions constituted fresh consideration.\n\n*(Aside — Key Principle: Fresh consideration is created by performing duties beyond original contract under changed hazardous conditions.)*"
  },
  {
    id: 131,
    week: 3,
    topic: "Consideration",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Williams v Roffey Bros & Nicholls (1991 UKCA)",
    question: "Williams v Roffey Bros & Nicholls (1991 UKCA)",
    answer: "**FACTS:**\nWilliams contracted to refurbish 27 flats for Roffey Bros. Williams underquoted and ran into financial difficulty. Roffey Bros agreed to pay extra £575 per flat to finish on time to avoid liquidated damages to main employer. Roffey later refused to pay extra.\n\n**HELD / RULING:**\nRoffey Bros bound. Obtaining a practical benefit (timely completion, avoiding penalty clauses, avoiding finding new contractor) without duress constitutes valid consideration.\n\n*(Aside — Key Principle: Practical benefit obtained by promisor can constitute valid consideration for extra payment under existing contract.)*"
  },
  {
    id: 132,
    week: 3,
    topic: "Consideration",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "Musumeci v Winadell (1994 NSWSC)",
    question: "Musumeci v Winadell Pty Ltd (1994 NSWSC)",
    answer: "**FACTS:**\nMusumecis leased fruit shop in shopping center owned by Winadell. Winadell leased another shop to competitor; Musumecis' business suffered. Winadell agreed to reduce rent by 1/3, but later resiled and demanded full rent.\n\n**HELD / RULING:**\nRent reduction binding. Santow J applied practical benefit rule in Australia: practical benefit of keeping tenant viable and avoiding vacancy/litigation is valid consideration.\n\n*(Aside — Key Principle: Practical benefit doctrine applied and modified in Australia.)*"
  },
  {
    id: 133,
    week: 3,
    topic: "Consideration",
    court: "AC",
    jurisdiction: "Privy Council (Persuasive in Vic)",
    caseName: "Pao On v Lau Yiu Long (1980 AC)",
    question: "Pao On v Lau Yiu Long (1980 AC)",
    answer: "**FACTS:**\nPao On agreed to sell shares to company. To protect share market value, Pao On promised company not to sell shares for 1 year. Main shareholder Lau later agreed to provide personal indemnity against losses if share price fell. When price fell, Lau refused to pay indemnity.\n\n**HELD / RULING:**\nIndemnity enforceable. Performing an existing contractual obligation owed to a THIRD party is valid consideration because new promisor gets direct legal right to enforce promise.\n\n*(Aside — Key Principle: Promise to perform existing duty owed to a third party is good consideration.)*"
  },
  {
    id: 134,
    week: 3,
    topic: "Consideration",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Wigan v Edwards (1973 HCA)",
    question: "Wigan v Edwards (1973 HCA)",
    answer: "**FACTS:**\nEdwards agreed to buy house from Wigan. After signing contract, Edwards found defects and threatened not to complete settlement unless fixed. Wigan signed written promise to fix defects. Wigan failed to fix defects after completion.\n\n**HELD / RULING:**\nWigan bound. Compromising a bona fide legal claim/dispute is good consideration, even if claim would fail in court, provided claim was honestly asserted and not frivolous/vexatious.\n\n*(Aside — Key Principle: Compromise of a bona fide legal dispute constitutes fresh consideration.)*"
  },

  // --- TOPIC 4: INTENTION TO CREATE LEGAL RELATIONS ---
  {
    id: 135,
    week: 4,
    topic: "Intention",
    court: "FCAFC",
    jurisdiction: "Full Federal Court (Binding/Persuasive in Vic)",
    caseName: "Shahid v College of Dermatologists (2008 FCAFC)",
    question: "Shahid v Australasian College of Dermatologists (2008 FCAFC)",
    answer: "**FACTS:**\nDr Shahid applied for training positions and paid substantial appeal fees when rejected. College rejected appeals. Shahid sued arguing binding contract existed governing appeal process and college failed to follow handbook rules.\n\n**HELD / RULING:**\nIntention present. Intention is an objective test: reasonable person considering business-like context, weighty subject matter, substantial fee, and detailed handbook would infer legal intention.\n\n*(Aside — Key Principle: Intention is tested objectively; commercial/educational appeals with substantial fees manifest legal intention.)*"
  },
  {
    id: 136,
    week: 4,
    topic: "Intention",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Ermogenous v Greek Orthodox Community (2002 HCA)",
    question: "Ermogenous v Greek Orthodox Community of SA (2002 HCA)",
    answer: "**FACTS:**\nArchbishop Ermogenous served Church for 23 years. Upon resignation, claimed unpaid annual and long service leave. Church denied contractual relationship, arguing spiritual relationship.\n\n**HELD / RULING:**\nContractual intention established. Rejected rigid presumptions in contract law. Onus of proof is on party asserting intention, evaluated on all facts.\n\n*(Aside — Key Principle: Rejection of rigid presumptions for intention; onus of proof on party asserting legal relations.)*"
  },
  {
    id: 137,
    week: 4,
    topic: "Intention",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Ashton v Pratt (2015 NSWCA)",
    question: "Ashton v Pratt (2015 NSWCA)",
    answer: "**FACTS:**\nAshton provided escort services to late billionaire Pratt. Pratt orally promised her $2.5m trust for children, $500k house, and $500k annual allowance. When Pratt died, executors refused payments.\n\n**HELD / RULING:**\nNO intention to create legal relations. Language was non-binding, setting was social/personal, and terms were vague.\n\n*(Aside — Key Principle: Social and personal contexts point strongly away from legal intention.)*"
  },
  {
    id: 138,
    week: 4,
    topic: "Intention",
    court: "SASR",
    jurisdiction: "SA Supreme Court (Persuasive in Vic)",
    caseName: "Todd v Nichol (1957 SASR)",
    question: "Todd v Nichol (1957 SASR)",
    answer: "**FACTS:**\nHost living in SA invited deceased husband's sister and niece to move from Scotland to live with her for life rent-free. Todds accepted, gave up lease and job in Scotland, and moved. Relationship broke down; host attempted to evict them.\n\n**HELD / RULING:**\nIntention established. Substantial effort, expense, and life disruption by Todds in reliance showed parties intended legally binding arrangement.\n\n*(Aside — Key Principle: Substantial reliance and detriment in domestic/social setting points towards intention.)*"
  },
  {
    id: 139,
    week: 4,
    topic: "Intention",
    court: "SASR",
    jurisdiction: "SA Supreme Court (Persuasive in Vic)",
    caseName: "Roufos v Brewster (1971 SASR)",
    question: "Roufos v Brewster (1971 SASR)",
    answer: "**FACTS:**\nBrewsters owned truck needing repairs in Adelaide. Agreed with son-in-law Roufos to transport truck on his semi-trailer. Truck damaged on trip; Brewsters sued Roufos for breach of contract.\n\n**HELD / RULING:**\nIntention to create legal relations. Although parties were family, setting and subject matter were distinctly commercial.\n\n*(Aside — Key Principle: Commercial transactions between family members retain legal intention.)*"
  },
  {
    id: 140,
    week: 4,
    topic: "Intention",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Admin of PNG v Leahy (1961 HCA)",
    question: "Administration of Papua and New Guinea v Leahy (1961 HCA)",
    answer: "**FACTS:**\nDept of Agriculture arranged to spray cattle on Leahy's property to eradicate ticks. Spraying done poorly; cattle infestation worsened. Leahy sued govt for breach of contract.\n\n**HELD / RULING:**\nNO contract. Govt was simply executing administrative social welfare policy, not entering a commercial contract.\n\n*(Aside — Key Principle: Government policy execution and administrative aid lack contractual intention.)*"
  },
  {
    id: 141,
    week: 4,
    topic: "Intention",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Placer Development Ltd v Commonwealth (1969 HCA)",
    question: "Placer Development Ltd v Commonwealth (1969 HCA)",
    answer: "**FACTS:**\nFormal written agreement between Placer and Cth to form timber company. Clause 14 stated Cth would pay subsidy *\"at a rate determined by the Commonwealth from time to time\"*. Cth stopped paying subsidy.\n\n**HELD / RULING:**\nSubsidy promise illusory and unenforceable. Unfettered discretion to determine rate means no binding legal promise.\n\n*(Aside — Key Principle: Promises retaining unfettered discretion are illusory and lack legal intention.)*"
  },
  {
    id: 142,
    week: 4,
    topic: "Intention",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Kleinwort Benson v Malaysia Mining (1989 UKCA)",
    question: "Kleinwort Benson Ltd v Malaysia Mining Corp Bhd (1989 UKCA)",
    answer: "**FACTS:**\nBank KB agreed to loan money to MMC's subsidiary. MMC refused to guarantee loan, but issued letter of comfort stating: *\"It is our policy to ensure that our business is at all times in a position to meet its liabilities...\"*. Subsidiary liquidated.\n\n**HELD / RULING:**\nNO contractual effect. Letter was a statement of present policy, not a guarantee or future promise.\n\n*(Aside — Key Principle: Statement of present policy in a letter of comfort is NOT a contractual promise.)*"
  },
  {
    id: 143,
    week: 4,
    topic: "Intention",
    court: "VSC",
    jurisdiction: "Victorian Supreme Court (Binding in Vic)",
    caseName: "CBA v TLI Management (1989 Vic)",
    question: "Commonwealth Bank of Australia v TLI Management (1989 Vic)",
    answer: "**FACTS:**\nCBA allowed Hovertravel overdrawn account. TLI provided letter of comfort stating it *\"confirmed takeover would proceed as soon as legally possible\"*. CBA honored cheques, but TLI did not complete takeover or repay CBA.\n\n**HELD / RULING:**\nNOT intended to be legally binding. Wording (*'we confirm'*) was vague and non-promissory.\n\n*(Aside — Key Principle: Uncertain/vague wording in letter of comfort indicates no contractual intention.)*"
  },
  {
    id: 144,
    week: 4,
    topic: "Intention",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "Banque Brussels Lambert v ANI (1989 NSWSC)",
    question: "Banque Brussels Lambert SA v Australian National Industries (1989 NSWSC)",
    answer: "**FACTS:**\nBBL loaned money to Spedley after obtaining strongly worded letter of comfort from 45% shareholder ANI promising to give 90 days notice before selling shares and ensure Spedley met liabilities. ANI sold shares without notice.\n\n**HELD / RULING:**\nIntention to create legal relations established. Statements in commercial letter of comfort were strongly promissory.\n\n*(Aside — Key Principle: Strongly worded commercial letters of comfort manifest legal intention.)*"
  },
  {
    id: 145,
    week: 4,
    topic: "Intention",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Masters v Cameron (1954 HCA)",
    question: "Masters v Cameron (1954 HCA)",
    answer: "**FACTS:**\nVendor sold property to Masters under written document stating *\"subject to preparation of a formal contract of sale\"*. Masters paid deposit but later refused to proceed.\n\n**HELD / RULING:**\nNO binding contract (Category 3). Established 3 categories of preliminary agreements: 1. Binding immediately; 2. Binding to complete doc; 3. NOT binding until formal execution.\n\n*(Aside — Key Principle: 3 categories of preliminary agreement (\"subject to contract\" presumption of no binding contract until formal execution).)*"
  },
  {
    id: 146,
    week: 4,
    topic: "Intention",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "Baulkham Hills Hospital v GR Securities (1986 NSWSC)",
    question: "Baulkham Hills Private Hospital v GR Securities (1986 NSWSC)",
    answer: "**FACTS:**\nLetters negotiating hospital sale stated *\"legally binding agreement in principle... until formal contracts\"*. Vendor sought to resile.\n\n**HELD / RULING:**\nBinding contract under 'Fourth Category' of preliminary agreements, where parties intend to be bound immediately but expect to add further agreed terms in formal contract.\n\n*(Aside — Key Principle: Fourth category of preliminary agreements (immediately binding with expected extra terms).)*"
  },

  // --- TOPIC 5: CERTAINTY ---
  {
    id: 147,
    week: 5,
    topic: "Certainty",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Milne v Attorney-General (Tas) (1956 HCA)",
    question: "Milne v Attorney-General (Tas) (1956 HCA)",
    answer: "**FACTS:**\nWW2 veteran eligible for land settlement under circulars. Government altered rent valuation formula; veteran argued pre-existing contract governed rent.\n\n**HELD / RULING:**\nNo contract. Circulars lacked essential terms, and omitted terms were too complex for court to supply.\n\n*(Aside — Key Principle: Absence of essential terms renders contract void for uncertainty.)*"
  },
  {
    id: 148,
    week: 5,
    topic: "Certainty",
    court: "VSC",
    jurisdiction: "Victorian Supreme Court (Binding in Vic)",
    caseName: "ANZ v Frost Holdings (1989 Vic)",
    question: "ANZ Banking Group Ltd v Frost Holdings (1989 Vic)",
    answer: "**FACTS:**\nNegotiations for Frost to produce calendars for ANZ. No agreement reached on price, size, paper quality, or quantity. ANZ pulled out; Frost sued.\n\n**HELD / RULING:**\nNo contract. Lacking essential terms. Court cannot supply fundamental commercial terms where parties haven't agreed.\n\n*(Aside — Key Principle: Courts cannot supply missing essential terms (price, design, quantity).)*"
  },
  {
    id: 149,
    week: 5,
    topic: "Certainty",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Foley v Classique Coaches (1934 UKCA)",
    question: "Foley v Classique Coaches Ltd (1934 UKCA)",
    answer: "**FACTS:**\nClassique bought land from Foley, agreeing to buy petrol exclusively from Foley *\"at price agreed in writing from time to time\"*. Performed for 3 years, then Classique tried to buy petrol elsewhere arguing price term uncertain.\n\n**HELD / RULING:**\nBinding contract. Implied term that petrol be supplied at reasonable price and quality. Part performance showed parties believed contract was valid.\n\n*(Aside — Key Principle: Part performance encourages courts to imply reasonable price to preserve certainty.)*"
  },
  {
    id: 150,
    week: 5,
    topic: "Certainty",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Upper Hunter County District v ACF (1968 HCA)",
    question: "Council of the Upper Hunter County District v ACF (1968 HCA)",
    answer: "**FACTS:**\nCouncil electricity supply contract Clause 5 stated *\"if supplier's costs shall vary... supplier right to vary maximum demand charge\"*. ACF argued clause void for uncertainty.\n\n**HELD / RULING:**\nClause NOT void. A term is not uncertain if it is capable of bearing a meaning. Court will ascertain meaning.\n\n*(Aside — Key Principle: Broad/uncertain terms are valid if capable of bearing a meaning.)*"
  },
  {
    id: 151,
    week: 5,
    topic: "Certainty",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Whitlock v Brew (1968 HCA)",
    question: "Whitlock v Brew (1968 HCA)",
    answer: "**FACTS:**\nContract for land sale required purchaser to lease Shell station back *\"on such reasonable terms as commonly govern such a lease\"*. Purchaser backed out.\n\n**HELD / RULING:**\nClause void for uncertainty. No objective standard/benchmark for common Shell lease terms existed, and clause could not be severed.\n\n*(Aside — Key Principle: Absence of objective benchmark renders 'reasonable terms' clause void.)*"
  },
  {
    id: 152,
    week: 5,
    topic: "Certainty",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Hall v Busst (1960 HCA)",
    question: "Hall v Busst (1960 HCA)",
    answer: "**FACTS:**\nBusst sold island to Hall with option to repurchase *\"at original price adjusted for improvements and depreciation\"*. Hall sold to 3rd party; Busst sued.\n\n**HELD / RULING:**\nOption void for uncertainty. No benchmark existed to determine depreciation of island property.\n\n*(Aside — Key Principle: Price/value calculation lacking objective standard is void for uncertainty.)*"
  },
  {
    id: 153,
    week: 5,
    topic: "Certainty",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "United Group Rail Services v Rail Corp (2009 NSWCA)",
    question: "United Group Rail Services v Rail Corp (2009 NSWCA)",
    answer: "**FACTS:**\nRail design contract contained dispute resolution clause requiring senior representatives to *\"meet and undertake genuine and good faith negotiations\"*. Dispute arose; UGRS claimed clause void for uncertainty.\n\n**HELD / RULING:**\nClause NOT void for uncertainty. Agreement to negotiate in good faith is an enforceable procedural requirement.\n\n*(Aside — Key Principle: Express clauses to negotiate in good faith are certain and enforceable.)*"
  },
  {
    id: 154,
    week: 5,
    topic: "Certainty",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Meehan v Jones (1982 HCA)",
    question: "Meehan v Jones (1982 HCA)",
    answer: "**FACTS:**\nLand sale contract Special Condition 1: *\"subject to purchaser receiving finance on satisfactory terms and conditions\"*. Vendor tried to resile arguing clause was illusory and uncertain.\n\n**HELD / RULING:**\nContract VALID. 'Subject to finance' requires purchaser to act honestly and reasonably to find finance. Not an unfettered discretion.\n\n*(Aside — Key Principle: 'Subject to finance' clauses are valid condition precedents, not illusory terms.)*"
  },
  {
    id: 155,
    week: 5,
    topic: "Certainty",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Godecke v Kirwan (1973 HCA)",
    question: "Godecke v Kirwan (1973 HCA)",
    answer: "**FACTS:**\nLand sale document provided purchaser would sign further agreement containing *\"such other covenants as vendor's solicitor may reasonably require\"*. Vendor refused to proceed.\n\n**HELD / RULING:**\nBinding contract. Leaving terms to be determined by a third party or solicitor acting reasonably does not cause uncertainty.\n\n*(Aside — Key Principle: Essential terms determined by a third party / solicitor acting reasonably are valid.)*"
  },
  {
    id: 156,
    week: 5,
    topic: "Certainty",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Biotech Australia v Pace (1988 NSWCA)",
    question: "Biotech Australia Pty Ltd v Pace (1988 NSWCA)",
    answer: "**FACTS:**\nEmployment contract offered Pace *\"option to participate in Company's senior staff equity sharing scheme\"*. No scheme existed or was ever created.\n\n**HELD / RULING:**\nTerm void for uncertainty. Promise was illusory with no objective benchmark to fix equity value.\n\n*(Aside — Key Principle: Illusory term lacking objective standard is void for uncertainty.)*"
  },

  // --- TOPIC 6: FORMALITIES ---
  {
    id: 157,
    week: 6,
    topic: "Formalities",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Yeoman Credit Ltd v Latter (1961 UKCA)",
    question: "Yeoman Credit Ltd v Latter (1961 UKCA)",
    answer: "**FACTS:**\nMinor leased car under hire-purchase. Adult (Owen) signed indemnity form. Minor defaulted; finance co sued Owen. Owen argued document was a guarantee (which required written formality under Statute of Frauds).\n\n**HELD / RULING:**\nDocument was an INDEMNITY (primary obligation), so enforceable against Owen despite minor's contract being void.\n\n*(Aside — Key Principle: Guarantee (secondary obligation, requires writing) vs Indemnity (primary obligation, enforceable without writing).)*"
  },
  {
    id: 158,
    week: 6,
    topic: "Formalities",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Tonitto v Bassal (1992 NSWCA)",
    question: "Tonitto v Bassal (1992 NSWCA)",
    answer: "**FACTS:**\nOption agreement to buy land signed by purchaser Tonitto but NOT vendor Bassal. Vendor's solicitor later wrote letter referring to *\"the option agreement\"*. Purchaser sought specific performance.\n\n**HELD / RULING:**\nMemorandum satisfied writing requirements via joinder of documents. Parol evidence allowed to connect documents.\n\n*(Aside — Key Principle: Joinder of documents allows separate signed/unsigned documents to satisfy writing requirements.)*"
  },
  {
    id: 159,
    week: 6,
    topic: "Formalities",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Pirie v Saunders (1961 HCA)",
    question: "Pirie v Saunders (1961 HCA)",
    answer: "**FACTS:**\nDiscussions regarding commercial shop lease. Lessor's solicitor made notes listing terms, but notes were unsigned and lacked essential details. Lessor refused lease.\n\n**HELD / RULING:**\nSolicitor's notes were NOT a sufficient note or memorandum. Did not satisfy authenticated signature fiction or completeness rules.\n\n*(Aside — Key Principle: Informal solicitor's notes lacking signature and essential terms fail Statute of Frauds.)*"
  },
  {
    id: 160,
    week: 6,
    topic: "Formalities",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "Ogilvie v Ryan (1976 NSWSC)",
    question: "Ogilvie v Ryan (1976 NSWSC)",
    answer: "**FACTS:**\nRyan agreed orally to move in and care for Ogilvie on promise she could live in house for life. She cared for him until death, but his will didn't mention her. Executor sued to evict her.\n\n**HELD / RULING:**\nPart performance failed under Narrow Test (living/caring not unequivocally referable to land contract), though constructive trust established.\n\n*(Aside — Key Principle: Narrow Test for Part Performance: acts must be unequivocally referable to alleged land contract.)*"
  },
  {
    id: 161,
    week: 6,
    topic: "Formalities",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Pipikos v Trayans (2018 HCA)",
    question: "Pipikos v Trayans (2018 HCA)",
    answer: "**FACTS:**\nTwo couples bought property. Pipikos paid deposit/mortgage for one property on oral promise Trayans would transfer half interest in separate property. Pipikos claimed part performance.\n\n**HELD / RULING:**\nHigh Court affirmed strict Narrow Test. Payment of money alone is not unequivocally referable to land transfer.\n\n*(Aside — Key Principle: Strict Narrow Test for Part Performance affirmed by High Court of Australia.)*"
  },

  // --- TOPIC 7: PRIVITY ---
  {
    id: 162,
    week: 7,
    topic: "Privity",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Coulls v Bagot's Executor (1967 HCA)",
    question: "Coulls v Bagot's Executor & Trustee Co Ltd (1967 HCA)",
    answer: "**FACTS:**\nMr Coulls agreed to let company quarry stone in exchange for royalties paid to him and his wife Doris. Mr Coulls died. Executor sought declaration whether royalties belonged to estate or wife.\n\n**HELD / RULING:**\nRoyalties belonged to estate. Mrs Coulls was not a party or joint promisee to the agreement.\n\n*(Aside — Key Principle: Third party cannot enforce contract unless party to agreement and joint promisee.)*"
  },
  {
    id: 163,
    week: 7,
    topic: "Privity",
    court: "HCA",
    jurisdiction: "High Court of Australia / Privy Council (Binding in Vic)",
    caseName: "Port Jackson Stevedoring v Salmond & Spraggon (1978 HCA)",
    question: "Port Jackson Stevedoring v Salmond & Spraggon (1978 HCA)",
    answer: "**FACTS:**\nRazor blades shipped on ship. Carrier issued bill of lading containing Himalaya clause extending exclusion of liability to stevedores. Goods stolen while unloaded by stevedore. Consignee sued stevedore in tort.\n\n**HELD / RULING:**\nStevedore protected by Himalaya clause in bill of lading as carrier acted as agent for stevedore.\n\n*(Aside — Key Principle: Himalaya clause extends contractual liability protection to third-party stevedores.)*"
  },
  {
    id: 164,
    week: 7,
    topic: "Privity",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Toll v Alphapharm (2004 HCA)",
    question: "Toll (FGCT) Pty Ltd v Alphapharm Pty Ltd (2004 HCA)",
    answer: "**FACTS:**\nAlphapharm engaged distributor RT to store/transport vaccines. RT contracted with Toll. RT representative signed credit form containing broad exclusion of liability and indemnity clauses without reading them. Vaccines frozen and ruined; Alphapharm sued Toll.\n\n**HELD / RULING:**\nToll not liable. RT acted as authorized agent for Alphapharm; signed exclusion clause bound Alphapharm.\n\n*(Aside — Key Principle: Agency exception: principal bound by exclusion terms signed by authorized agent.)*"
  },
  {
    id: 165,
    week: 7,
    topic: "Privity",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Trident General Insurance v McNiece (1988 HCA)",
    question: "Trident General Insurance Co Ltd v McNiece Bros (1988 HCA)",
    answer: "**FACTS:**\nInsurer Trident issued public liability policy to Blue Circle covering contractors/subcontractors. McNiece (subcontractor) sued by injured worker. McNiece sought indemnity from Trident; Trident denied liability citing privity.\n\n**HELD / RULING:**\nMcNiece entitled to enforce insurance policy directly against Trident.\n\n*(Aside — Key Principle: Exception to privity rule for third-party beneficiaries under insurance contracts.)*"
  },

  // --- TOPIC 8: ESTOPPEL ---
  {
    id: 166,
    week: 8,
    topic: "Estoppel",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Waltons Stores v Maher (1988 HCA)",
    question: "Waltons Stores (Interstate) Ltd v Maher (1988 HCA)",
    answer: "**FACTS:**\nWaltons negotiated commercial lease with Mahers. Mahers sent signed lease by way of exchange. Waltons told solicitors to 'go slow' while watching Mahers demolish existing building and begin construction. Waltons later backed out.\n\n**HELD / RULING:**\nEquitable estoppel established. Unconscionable for Waltons to stand by while Mahers acted to their detriment on assumption. 6-element test established.\n\n*(Aside — Key Principle: Equitable estoppel established as an independent cause of action ('sword' and 'shield').)*"
  },
  {
    id: 167,
    week: 8,
    topic: "Estoppel",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Legione v Hateley (1983 HCA)",
    question: "Legione v Hateley (1983 HCA)",
    answer: "**FACTS:**\nLand purchaser defaulted on settlement. Purchaser's solicitor called vendor's secretary asking for extension to Aug 17. Secretary said *\"I think that will be all right, but I'll have to get instructions\"*. Vendor rescinded on Aug 14.\n\n**HELD / RULING:**\nNO estoppel. Representation must be clear and unequivocal. Secretary's statement was uncertain and she lacked authority.\n\n*(Aside — Key Principle: Representation for promissory estoppel must be clear, precise, and unequivocal.)*"
  },
  {
    id: 168,
    week: 8,
    topic: "Estoppel",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Crown Melbourne v Cosmopolitan Hotel (2016 HCA)",
    question: "Crown Melbourne Ltd v Cosmopolitan Hotel (2016 HCA)",
    answer: "**FACTS:**\nTenants requested 5-year lease extension. Crown refused extra terms but stated tenants *\"would be looked after at renewal time\"*. Crown did not renew lease; tenants sued on estoppel.\n\n**HELD / RULING:**\nNO estoppel and NO collateral contract. Statement *\"looked after\"* was vaguely encouraging and not clear, precise, or unambiguous.\n\n*(Aside — Key Principle: Vague representations cannot ground promissory or inducement estoppel.)*"
  },
  {
    id: 169,
    week: 8,
    topic: "Estoppel",
    court: "SCSA",
    jurisdiction: "SA Supreme Court (Persuasive in Vic)",
    caseName: "Je Maintiendrai v Quaglia (1980 SCSA)",
    question: "Je Maintiendrai Pty Ltd v Quaglia (1980 SCSA)",
    answer: "**FACTS:**\nHairdresser tenant struggled financially. Landlord agreed verbally to reduce rent. When tenant sought to vacate 18 months later, landlord demanded full accumulated back-rent lump sum.\n\n**HELD / RULING:**\nLandlord estopped. Detriment is assessed at the moment representor seeks to resile from assumption (paying sudden lump sum was a detriment).\n\n*(Aside — Key Principle: Detriment for estoppel is assessed at the time the representor resiles from assumption.)*"
  },
  {
    id: 170,
    week: 8,
    topic: "Estoppel",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Sidhu v Van Dyke (2014 HCA)",
    question: "Sidhu v Van Dyke (2014 HCA)",
    answer: "**FACTS:**\nSidhu promised to subdivide and transfer property cottage to Van Dyke during affair. Van Dyke lived in cottage, did unpaid work, and refrained from seeking full divorce settlement. Sidhu resiled.\n\n**HELD / RULING:**\nEstoppel established. Representation need NOT be sole inducement for detrimental reliance. Onus of proof remains on plaintiff.\n\n*(Aside — Key Principle: Detrimental reliance need not be the sole motivation for action.)*"
  },
  {
    id: 171,
    week: 8,
    topic: "Estoppel",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Kramer v Stone (2024 HCA)",
    question: "Kramer v Stone (2024 HCA)",
    answer: "**FACTS:**\nStone share-farmed with Kramers for 23 years on promise he would inherit farm on death. Kramers left Stone only a small cash gift in will.\n\n**HELD / RULING:**\nEstoppel established. A single clear initial promise is sufficient for estoppel by encouragement if reliance is natural and foreseeable.\n\n*(Aside — Key Principle: Single clear promise sufficient for estoppel by encouragement; no need for continuous encouragement.)*"
  },
  {
    id: 172,
    week: 8,
    topic: "Estoppel",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Giumelli v Giumelli (1999 HCA)",
    question: "Giumelli v Giumelli (1999 HCA)",
    answer: "**FACTS:**\nParents promised son property if he worked orchard. Son worked farm for years. Relationship broke down after son married; brother moved into house on property.\n\n**HELD / RULING:**\nEstoppel established. Court awarded monetary value of land rather than land transfer to avoid injustice to innocent brother living on land.\n\n*(Aside — Key Principle: Equitable estoppel relief is flexible and molded to avoid third-party injustice.)*"
  },
  {
    id: 173,
    week: 8,
    topic: "Estoppel",
    court: "NSWSC",
    jurisdiction: "NSW Supreme Court (Persuasive in Vic)",
    caseName: "W v G (1996 NSWSC)",
    question: "W v G (1996 NSWSC)",
    answer: "**FACTS:**\nSame-sex couple had children via artificial insemination. Defendant encouraged plaintiff to have children on assumption she would share parenting costs. Relationship broke down; biological mother sued for child support on estoppel.\n\n**HELD / RULING:**\nEstoppel established as an independent cause of action ('sword') in tort/family setting.\n\n*(Aside — Key Principle: Equitable estoppel operates as an independent cause of action ('sword').)*"
  },

  // --- TOPIC 9: EXPRESS TERMS ---
  {
    id: 174,
    week: 9,
    topic: "Express Terms",
    court: "UK",
    jurisdiction: "UK Common Law (Persuasive in Vic)",
    caseName: "L'Estrange v Graucob (1934 UK)",
    question: "L'Estrange v F Graucob Ltd (1934 UK)",
    answer: "**FACTS:**\nCafe owner signed order form for cigarette vending machine. Form contained fine print clause excluding all express/implied warranties. Machine malfunctioned; buyer claimed small print unread.\n\n**HELD / RULING:**\nSeller NOT liable. Signing a document binds party to all terms regardless of whether read (absent fraud/misrepresentation).\n\n*(Aside — Key Principle: Signature Rule: signing a contractual document binds party to all terms.)*"
  },
  {
    id: 175,
    week: 9,
    topic: "Express Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Toll v Alphapharm (2004 HCA)",
    question: "Toll (FGCT) Pty Ltd v Alphapharm Pty Ltd (2004 HCA)",
    answer: "**FACTS:**\nRT agent signed credit application form for vaccine storage containing broad exclusion of liability and indemnity clauses without reading them. Vaccines ruined.\n\n**HELD / RULING:**\nToll NOT liable. Signature objectively represents assent. No requirement to give reasonable notice of onerous conditions in a SIGNED contract.\n\n*(Aside — Key Principle: Signature rule applies to onerous terms; no duty of reasonable notice for signed documents.)*"
  },
  {
    id: 176,
    week: 9,
    topic: "Express Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Curtis v Chemical Cleaning (1951 UKCA)",
    question: "Curtis v Chemical Cleaning & Dyeing Co (1951 UKCA)",
    answer: "**FACTS:**\nCustomer took wedding dress to dry cleaner, handed receipt to sign. Shop assistant stated signature was to exclude liability for beads/sequins. Receipt actually excluded all damage. Dress stained.\n\n**HELD / RULING:**\nExclusion clause ineffective due to assistant's oral misrepresentation overriding signature.\n\n*(Aside — Key Principle: Misrepresentation of a term's scope invalidates incorporation by signature.)*"
  },
  {
    id: 177,
    week: 9,
    topic: "Express Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Oceanic Sun Line v Fay (1988 HCA)",
    question: "Oceanic Sun Line Special Shipping Co v Fay (1988 HCA)",
    answer: "**FACTS:**\nPassenger booked cruise in Sydney, issued exchange voucher. Ticket containing exclusive Greek court jurisdiction clause delivered on boarding ship in Greece. Passenger injured.\n\n**HELD / RULING:**\nJurisdiction clause NOT incorporated. Contract formed in NSW upon exchange voucher issue; terms delivered after formation are ineffective.\n\n*(Aside — Key Principle: Terms delivered AFTER contract formation are not incorporated.)*"
  },
  {
    id: 178,
    week: 9,
    topic: "Express Terms",
    court: "FCA",
    jurisdiction: "Federal Court of Australia (Binding/Persuasive in Vic)",
    caseName: "eBay v Creative Festival (2006 FCA)",
    question: "eBay International AG v Creative Festival Entertainment (2006 FCA)",
    answer: "**FACTS:**\nBig Day Out organizers printed Condition 6 on tickets stating tickets resold for profit would be cancelled. Tickets sold online/over counter without displaying condition prior to purchase completion.\n\n**HELD / RULING:**\nCondition 6 NOT incorporated for sales lacking pre-formation notice.\n\n*(Aside — Key Principle: Ticket conditions require advance notice before contract formation.)*"
  },
  {
    id: 179,
    week: 9,
    topic: "Express Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Parker v South Eastern Railway (1877 UKCA)",
    question: "Parker v South Eastern Railway Co (1877 UKCA)",
    answer: "**FACTS:**\nPassenger deposited bag in station cloakroom, given ticket stating 'see back'. Back contained clause limiting lost luggage liability to £10. Bag lost.\n\n**HELD / RULING:**\nBound if actual knowledge of terms OR if reasonable notice given that ticket contained conditions.\n\n*(Aside — Key Principle: Ticket Rule: incorporation requires actual knowledge or reasonable notice.)*"
  },
  {
    id: 180,
    week: 9,
    topic: "Express Terms",
    court: "VSC",
    jurisdiction: "Victorian Supreme Court (Binding in Vic)",
    caseName: "Causer v Brown (1951 Vic)",
    question: "Causer v Brown (1951 Vic)",
    answer: "**FACTS:**\nCustomer handed dry cleaning docket with printed conditions excluding liability for damage. Dress damaged.\n\n**HELD / RULING:**\nExclusion clause NOT incorporated. Docket reasonably understood as mere voucher/receipt, not a contractual document requiring inspection.\n\n*(Aside — Key Principle: Non-contractual documents (dockets/receipts) require explicit attention drawn to terms.)*"
  },
  {
    id: 181,
    week: 9,
    topic: "Express Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Thornton v Shoe Lane Parking (1971 UKCA)",
    question: "Thornton v Shoe Lane Parking Ltd (1971 UKCA)",
    answer: "**FACTS:**\nCustomer drove into automated carpark, took ticket from machine. Ticket referred to conditions displayed inside premises excluding injury liability. Driver injured.\n\n**HELD / RULING:**\nExclusion clause NOT incorporated. Contract formed at machine entry. Onerous terms displayed after formation require prominent advance notice ('red hand rule').\n\n*(Aside — Key Principle: Red Hand Rule: onerous/unusual terms require explicit, prominent notice before contract formation.)*"
  },
  {
    id: 182,
    week: 9,
    topic: "Express Terms",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Baltic Shipping v Dillon (1991 NSWCA)",
    question: "Baltic Shipping Co v Dillon (1991 NSWCA)",
    answer: "**FACTS:**\nDillon booked cruise, paid deposit. Booking form stated ticket subject to conditions. Ticket issued later contained monetary limitation clauses. Cruise sank.\n\n**HELD / RULING:**\nLimitation clauses NOT incorporated. Shipping company failed to give reasonable advance notice of unusual conditions before contract formation.\n\n*(Aside — Key Principle: Retention of ticket does not incorporate unusual terms without explicit advance notice.)*"
  },
  {
    id: 183,
    week: 9,
    topic: "Express Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Interfoto v Stiletto (1988 UKCA)",
    question: "Interfoto Picture Library v Stiletto Visual Programmes (1988 UKCA)",
    answer: "**FACTS:**\nStiletto ordered photo transparencies. Delivery note contained printed condition charging £5/day holding fee per transparency if returned late. Stiletto returned them late.\n\n**HELD / RULING:**\nHolding fee clause NOT incorporated. Exorbitant onerous condition required explicit attention drawn.\n\n*(Aside — Key Principle: Particularly onerous terms require explicit attention drawn to them.)*"
  },
  {
    id: 184,
    week: 9,
    topic: "Express Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Balmain New Ferry v Robertson (1906 HCA)",
    question: "Balmain New Ferry Co Ltd v Robertson (1906 HCA)",
    answer: "**FACTS:**\nTurnstile notice at ferry wharf required 1 penny entry and exit. Robertson knew rules and used ferry regularly. Missed ferry and refused to pay exit penny.\n\n**HELD / RULING:**\nExit fare condition incorporated by prior course of dealings and actual knowledge.\n\n*(Aside — Key Principle: Terms incorporated by regular prior course of dealings with knowledge of rules.)*"
  },
  {
    id: 185,
    week: 9,
    topic: "Express Terms",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "State Rail Authority v Heath Outdoor (1986 NSWCA)",
    question: "State Rail Authority of NSW v Heath Outdoor (1986 NSWCA)",
    answer: "**FACTS:**\nHeath signed billboard advertising contract containing 4-week termination clause. SRA officer gave oral assurance clause wouldn't be used. SRA terminated contract.\n\n**HELD / RULING:**\nParol evidence rule applies only to contracts wholly in writing. Oral assurances were not terms because officer clearly lacked authority.\n\n*(Aside — Key Principle: Parol Evidence Rule flexible approach: court looks at surrounding facts to determine if contract is wholly written.)*"
  },
  {
    id: 186,
    week: 9,
    topic: "Express Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Hoyts v Spencer (1919 HCA)",
    question: "Hoyts Pty Ltd v Spencer (1919 HCA)",
    answer: "**FACTS:**\nWritten theatre sublease contained unconditional 4-week termination clause. Sublessor gave oral promise he would only terminate if head lessor required. Sublessor terminated without head lessor requirement.\n\n**HELD / RULING:**\nNO collateral contract. Alleged collateral promise directly contradicted written termination right in main contract.\n\n*(Aside — Key Principle: Collateral contracts CANNOT contradict terms of the main written contract.)*"
  },
  {
    id: 187,
    week: 9,
    topic: "Express Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Equuscorp v Glengallan Investments (2004 HCA)",
    question: "Equuscorp Pty Ltd v Glengallan Investments (2004 HCA)",
    answer: "**FACTS:**\nInvestors executed signed written loan agreements. Sued for debt, investors claimed prior oral discussions agreed loan would be non-recourse.\n\n**HELD / RULING:**\nSigned written agreement binding. Oral representations overridden by executed written contract.\n\n*(Aside — Key Principle: Signed written commercial agreement overrides prior inconsistent oral statements.)*"
  },
  {
    id: 188,
    week: 9,
    topic: "Express Terms",
    court: "WASC",
    jurisdiction: "WA Supreme Court (Persuasive in Vic)",
    caseName: "Van den Esschert v Chappell (1960 WASC)",
    question: "Van den Esschert v Chappell (1960 WASC)",
    answer: "**FACTS:**\nBefore signing house contract, buyer asked vendor if there were termites. Vendor replied *\"No, if there had been I would have eradicated them\"*. Buyer signed; discovered termites later.\n\n**HELD / RULING:**\nCollateral warranty established. Oral inquiry on vital matter immediately prior to signing creates binding term.\n\n*(Aside — Key Principle: Important oral inquiry immediately prior to signing creates collateral term.)*"
  },
  {
    id: 189,
    week: 9,
    topic: "Express Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "JJ Savage & Sons v Blakney (1970 HCA)",
    question: "JJ Savage & Sons Pty Ltd v Blakney (1970 HCA)",
    answer: "**FACTS:**\nBoat seller wrote letter stating *\"estimated speed 15 MPH\"*. Written contract omitted speed. Boat only reached 12 MPH; buyer sued.\n\n**HELD / RULING:**\nNO collateral contract. Statement *\"estimated speed\"* was an estimate/opinion, not a promissory warranty.\n\n*(Aside — Key Principle: Statement of opinion or estimate is NOT promissory.)*"
  },
  {
    id: 190,
    week: 9,
    topic: "Express Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Oscar Chess v Williams (1957 UKCA)",
    question: "Oscar Chess Ltd v Williams (1957 UKCA)",
    answer: "**FACTS:**\nSeller traded car to dealer, stating 1948 model based on logbook. Car was actually 1939 model with forged logbook. Dealer sued for difference in value.\n\n**HELD / RULING:**\nStatement was a non-binding representation. Non-expert seller lacked personal knowledge/expertise.\n\n*(Aside — Key Principle: Statement by non-expert relying on registration papers is a representation, not a term.)*"
  },
  {
    id: 191,
    week: 9,
    topic: "Express Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "Dick Bentley v Harold Smith Motors (1965 UKCA)",
    question: "Dick Bentley Productions v Harold Smith Motors (1965 UKCA)",
    answer: "**FACTS:**\nCar dealer told buyer car had only done 20,000 miles since new engine fitted. Car had actually done over 100,000 miles. Buyer sued.\n\n**HELD / RULING:**\nStatement WAS a binding contractual warranty. Car dealer had special expertise and position to verify facts.\n\n*(Aside — Key Principle: Statement by expert dealer in position to verify facts is a binding contractual term/warranty.)*"
  },

  // --- TOPIC 10: CONSTRUCTION & IMPLIED TERMS ---
  {
    id: 192,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Mount Bruce Mining v Wright Prospecting (2015 HCA)",
    question: "Mount Bruce Mining Pty Ltd v Wright Prospecting (2015 HCA)",
    answer: "**FACTS:**\nMining royalty contract dispute over area definitions ('MBM area' and 'deriving title through or under').\n\n**HELD / RULING:**\nPrimacy of original document text affirmed. Meaning determined objectively in context.\n\n*(Aside — Key Principle: Contractual construction principles: objective test considering text, context, and purpose.)*"
  },
  {
    id: 193,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Pacific Carriers v BNP Paribas (2004 HCA)",
    question: "Pacific Carriers Ltd v BNP Paribas (2004 HCA)",
    answer: "**FACTS:**\nBank officer signed letter of indemnity for cargo delivery believing she was only authenticating signatures. Bank denied liability.\n\n**HELD / RULING:**\nBank bound by indemnity. Subjective intent irrelevant; objective construction based on reasonable recipient's understanding.\n\n*(Aside — Key Principle: Objective construction of commercial documents.)*"
  },
  {
    id: 194,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Royal Botanic Gardens v South Sydney CC (2002 HCA)",
    question: "Royal Botanic Gardens and Domain Trust v South Sydney CC (2002 HCA)",
    answer: "**FACTS:**\n50-year lease rent clause allowed adjustment regarding *\"additional costs and expenses regarding domain\"*. Landlord sought to increase rent based on commercial market value.\n\n**HELD / RULING:**\nAdditional costs were the ONLY permitted factors. Surrounding circumstances and background facts considered.\n\n*(Aside — Key Principle: Surrounding circumstances admissible to construe commercial purpose and scope of rent review.)*"
  },
  {
    id: 195,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "ABC v APRA (1973 HCA)",
    question: "ABC v Australian Performing Right Association (1973 HCA)",
    answer: "**FACTS:**\nRadio/TV license fee adjustment formula text supported base-year indexation. APRA claimed cumulative adjustment was intended.\n\n**HELD / RULING:**\nNon-cumulative formula enforced as written. Unambiguous text enforced even if result appears unreasonable.\n\n*(Aside — Key Principle: Unambiguous text given effect regardless of unreasonableness.)*"
  },
  {
    id: 196,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Fitzgerald v Masters (1956 HCA)",
    question: "Fitzgerald v Masters (1956 HCA)",
    answer: "**FACTS:**\nContract clause incorporated standard conditions *\"so far as inconsistent with Crown Lands Act\"*. Literal reading destroyed contract intention.\n\n**HELD / RULING:**\nWord *\"consistent\"* substituted for *\"inconsistent\"* to correct obvious draftsmanship error.\n\n*(Aside — Key Principle: Courts correct obvious draftsmanship slips to avoid absurd results.)*"
  },
  {
    id: 197,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Darlington Futures v Delco Australia (1986 HCA)",
    question: "Darlington Futures Ltd v Delco Australia (1986 HCA)",
    answer: "**FACTS:**\nBroker engaged in unauthorized day trading causing heavy losses. Contract had Cl 6 (excluding liability for trading on client's behalf) and Cl 7 ($100 cap per claim).\n\n**HELD / RULING:**\nCl 6 failed (unauthorized act), but Cl 7 ($100 cap per claim) protected broker. Contra proferentem applies in ambiguity.\n\n*(Aside — Key Principle: Exclusion/limitation clauses construed according to natural meaning; contra proferentem in ambiguity.)*"
  },
  {
    id: 198,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Sydney City Council v West (1965 HCA)",
    question: "Sydney City Council v West (1965 HCA)",
    answer: "**FACTS:**\nCarpark attendant issued duplicate ticket to thief who stole West's car. Carpark relied on broad exclusion clause on ticket.\n\n**HELD / RULING:**\nExclusion clause ineffective. Attendant committed unauthorized act outside four corners of contract.\n\n*(Aside — Key Principle: Four Corners Rule: exclusion clauses do not cover unauthorized acts outside contract scope.)*"
  },
  {
    id: 199,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Davis v Pearce Parking Station (1954 HCA)",
    question: "Davis v Pearce Parking Station Pty Ltd (1954 HCA)",
    answer: "**FACTS:**\nCar parked at station under check stating *\"garaged at owner's risk and station not responsible for loss/damage of any description\"*. Car stolen due to attendant's negligence.\n\n**HELD / RULING:**\nCarpark protected. Wording sufficiently clear to exclude negligence liability.\n\n*(Aside — Key Principle: Clear exclusion clause can exempt liability for negligence.)*"
  },
  {
    id: 200,
    week: 10,
    topic: "Implied Terms",
    court: "UKCA",
    jurisdiction: "UK Court of Appeal (Persuasive in Vic)",
    caseName: "The Moorcock (1889 UKCA)",
    question: "The Moorcock (1889 UKCA)",
    answer: "**FACTS:**\nShip docked at jetty on River Thames. At low tide, ship grounded on rocky riverbed and suffered hull damage.\n\n**HELD / RULING:**\nTerm implied in fact for business efficacy that jetty owners take reasonable care to ascertain berth safety.\n\n*(Aside — Key Principle: Terms implied in fact for business efficacy.)*"
  },
  {
    id: 201,
    week: 10,
    topic: "Implied Terms",
    court: "QCA",
    jurisdiction: "Qld Court of Appeal (Persuasive in Vic)",
    caseName: "Re Ronim Pty Ltd (1999 QCA)",
    question: "Re Ronim Pty Ltd (1999 QCA)",
    answer: "**FACTS:**\nLand settlement date had 'time of essence' clause. Title office computer crashed on settlement day preventing search; vendor refused 1-day extension.\n\n**HELD / RULING:**\nTerm implied in fact that completion be suspended during computer crash.\n\n*(Aside — Key Principle: Business efficacy implied term for computer system failure.)*"
  },
  {
    id: 202,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Codelfa Construction v State Rail NSW (1982 HCA)",
    question: "Codelfa Construction Pty Ltd v State Rail Authority of NSW (1982 HCA)",
    answer: "**FACTS:**\nRailway excavation contractor stopped from working night shifts due to resident noise injunction. Contractor claimed implied term for extra costs.\n\n**HELD / RULING:**\nTerm NOT implied. Strict 5 BP Refinery conditions for formal contracts; term was not so obvious it went without saying.\n\n*(Aside — Key Principle: High threshold for terms implied in fact in formal contracts (5 BP Refinery conditions).)*"
  },
  {
    id: 203,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Realestate.com.au v Hardingham (2022 HCA)",
    question: "Realestate.com.au Pty Ltd v Hardingham (2022 HCA)",
    answer: "**FACTS:**\nPhotographer took real estate photos under informal agreement. Agency sub-licensed photos to REA platform indefinitely. Photographer sued for copyright infringement.\n\n**HELD / RULING:**\nBroad sub-license term inferred from facts, conduct, and commercial practice.\n\n*(Aside — Key Principle: Inferred/implied terms in informal contracts based on conduct and context.)*"
  },
  {
    id: 204,
    week: 10,
    topic: "Implied Terms",
    court: "HL",
    jurisdiction: "UK House of Lords (Persuasive in Vic)",
    caseName: "Liverpool City Council v Irwin (1977 HL)",
    question: "Liverpool City Council v Irwin (1977 HL)",
    answer: "**FACTS:**\nLifts and stairs in public housing tower fell into disrepair. Tenants withheld rent claiming implied term to repair.\n\n**HELD / RULING:**\nTerm implied IN LAW that landlord take reasonable care to repair common areas (necessity test).\n\n*(Aside — Key Principle: Terms implied in law based on necessity for a class of contracts.)*"
  },
  {
    id: 205,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Breen v Williams (1996 HCA)",
    question: "Breen v Williams (1996 HCA)",
    answer: "**FACTS:**\nPatient sought medical records from doctor to join breast implant class action. Doctor refused.\n\n**HELD / RULING:**\nNO term implied in law or fact giving patient right to medical records.\n\n*(Aside — Key Principle: No term implied in law unless necessary to prevent contract rights being rendered nugatory.)*"
  },
  {
    id: 206,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Con-Stan Industries v Norwich (1986 HCA)",
    question: "Con-Stan Industries of Australia v Norwich (1986 HCA)",
    answer: "**FACTS:**\nInsured paid premium to broker who went insolvent before paying insurer. Insured claimed implied term by custom that payment to broker discharged debt.\n\n**HELD / RULING:**\nNO term implied by custom. Custom must be so well known that everyone contracts on that basis.\n\n*(Aside — Key Principle: Requirements for terms implied by custom or trade usage.)*"
  },
  {
    id: 207,
    week: 10,
    topic: "Implied Terms",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Renard Constructions v Minister for Public Works (1992 NSWCA)",
    question: "Renard Constructions (ME) Pty Ltd v Minister for Public Works (1992 NSWCA)",
    answer: "**FACTS:**\nPrincipal called contractor to 'show cause' and cancelled contract despite contractor's reasonable explanation.\n\n**HELD / RULING:**\nImplied term that cancellation power be exercised reasonably and in good faith.\n\n*(Aside — Key Principle: Implied duty of reasonableness / good faith in exercising termination powers.)*"
  },
  {
    id: 208,
    week: 10,
    topic: "Implied Terms",
    court: "VSCA",
    jurisdiction: "Victorian Court of Appeal (Binding in Vic)",
    caseName: "Esso Australia v Southern Pacific (2005 VSCA)",
    question: "Esso Australia Resources Ltd v Southern Pacific Petroleum NL (2005 VSCA)",
    answer: "**FACTS:**\nCommercial contract dispute where party alleged breach of implied duty of good faith.\n\n**HELD / RULING:**\nVictorian Court of Appeal cautioned against universal implied duty of good faith in all commercial contracts.\n\n*(Aside — Key Principle: Caution against general implied duty of good faith in Victoria.)*"
  },
  {
    id: 209,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Secured Income Real Estate v St Martins (1979 HCA)",
    question: "Secured Income Real Estate (Aust) Ltd v St Martins Investments (1979 HCA)",
    answer: "**FACTS:**\nProperty sale contract required vendor to find tenants to get full price. Vendor offered to lease remaining space himself; buyer refused.\n\n**HELD / RULING:**\nImplied duty to co-operate applies to all contracts, but buyer's refusal was not arbitrary or unreasonable.\n\n*(Aside — Key Principle: Implied duty to co-operate applies to all contracts.)*"
  },
  {
    id: 210,
    week: 10,
    topic: "Implied Terms",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "CBA v Barker (2014 HCA)",
    question: "Commonwealth Bank of Australia v Barker (2014 HCA)",
    answer: "**FACTS:**\nRedundant bank employee claimed bank breached implied term of mutual trust and confidence by failing to follow redeployment policy.\n\n**HELD / RULING:**\nHigh Court rejected implied duty of mutual trust and confidence in Australian employment contracts.\n\n*(Aside — Key Principle: No implied term of mutual trust and confidence in employment contracts under Australian law.)*"
  },
  {
    id: 211,
    week: 10,
    topic: "Implied Terms",
    court: "NSWCA",
    jurisdiction: "NSW Court of Appeal (Persuasive in Vic)",
    caseName: "Burger King v Hungry Jack's (2001 NSWCA)",
    question: "Burger King Corp v Hungry Jack's Pty Ltd (2001 NSWCA)",
    answer: "**FACTS:**\nBurger King froze store approvals to prevent Hungry Jack's meeting annual franchise expansion targets.\n\n**HELD / RULING:**\nBK BREACHED implied duty of good faith by exercising discretion for extraneous purpose of driving out franchisee.\n\n*(Aside — Key Principle: Implied duty of good faith precludes exercising discretion for extraneous purposes.)*"
  },

  // --- TOPIC 11: AUSTRALIAN CONSUMER LAW (ACL) ---
  {
    id: 212,
    week: 11,
    topic: "ACL",
    court: "FCA",
    jurisdiction: "Federal Court of Australia (Binding/Persuasive in Vic)",
    caseName: "ACCC v Chrisco Hampers Australia (2015 FCA)",
    question: "ACCC v Chrisco Hampers Australia Pty Ltd (2015 FCA)",
    answer: "**FACTS:**\nLay-by hamper contract contained 'HeadStart Plan' automatically continuing payments after hamper paid off unless consumer opted out.\n\n**HELD / RULING:**\nTerm UNFAIR and void under ACL s 23 (significant imbalance, not reasonably necessary, detriment).\n\n*(Aside — Key Principle: Unfair terms under ACL s 23.)*"
  },
  {
    id: 213,
    week: 11,
    topic: "ACL",
    court: "HCA",
    jurisdiction: "High Court of Australia (Binding in Vic)",
    caseName: "Karpik v Carnival plc (Ruby Princess) (2023 HCA)",
    question: "Karpik v Carnival plc (2023 HCA)",
    answer: "**FACTS:**\nPassengers sued cruise line in tort after COVID outbreak. Cruise terms contained US class action waiver clause.\n\n**HELD / RULING:**\nClass action waiver clause held UNFAIR and void under ACL s 23.\n\n*(Aside — Key Principle: Class action waiver clause void as unfair term under ACL s 23.)*"
  },
  {
    id: 214,
    week: 11,
    topic: "ACL",
    court: "VSC",
    jurisdiction: "Victorian Supreme Court (Binding in Vic)",
    caseName: "Jetstar Airways v Free (2008 VSC)",
    question: "Jetstar Airways Pty Ltd v Free (2008 VSC)",
    answer: "**FACTS:**\nLow-cost airline contract charged $75 fee plus fare difference for changing flight details.\n\n**HELD / RULING:**\nTerm NOT unfair because fee was counterbalanced by low base fare.\n\n*(Aside — Key Principle: Term counterbalanced by low price is NOT unfair.)*"
  },
  {
    id: 215,
    week: 11,
    topic: "ACL",
    court: "VCAT",
    jurisdiction: "Victorian Civil & Administrative Tribunal (Binding in Vic)",
    caseName: "Director of Consumer Affairs Vic v Trainstation Health Clubs (2008 VCAT)",
    question: "Director of Consumer Affairs Vic v Trainstation Health Clubs (2008 VCAT)",
    answer: "**FACTS:**\nGym contract allowed immediate termination if member failed to comply with gym rules/regulations.\n\n**HELD / RULING:**\nTerm NOT unfair; protects legitimate operational and safety interests of gym.\n\n*(Aside — Key Principle: Term protecting legitimate business operational interest is NOT unfair.)*"
  }
];
