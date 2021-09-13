//REGULAR EXPRESSION FOR COPYING INTO REGISTER A

// twoByteInst("LXI B", "23"){
    
// }

let pattern_ab = /^MOV A,\s?B/;
let pattern_ac = /^MOV A,\s?C/;
let pattern_ad = /^MOV A,\s?D/;
let pattern_ae = /^MOV A,\s?E/;
let pattern_ah = /^MOV A,\s?H/;
let pattern_al = /^MOV A,\s?L/;
let pattern_am = /^MOV A,\s?M/;
let pattern_aa = /^MOV A,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER B
let pattern_bb = /^MOV B,\s?B/;
let pattern_bc = /^MOV B,\s?C/;
let pattern_bd = /^MOV B,\s?D/;
let pattern_be = /^MOV B,\s?E/;
let pattern_bh = /^MOV B,\s?H/;
let pattern_bl = /^MOV B,\s?L/;
let pattern_bm = /^MOV B,\s?M/;
let pattern_ba = /^MOV B,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER C
let pattern_cb = /^MOV C,\s?B/;
let pattern_cc = /^MOV C,\s?C/;
let pattern_cd = /^MOV C,\s?D/;
let pattern_ce = /^MOV C,\s?E/;
let pattern_ch = /^MOV C,\s?H/;
let pattern_cl = /^MOV C,\s?L/;
let pattern_cm = /^MOV C,\s?M/;
let pattern_ca = /^MOV C,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER D
let pattern_db = /^MOV D,\s?B/;
let pattern_dc = /^MOV D,\s?C/;
let pattern_dd = /^MOV D,\s?D/;
let pattern_de = /^MOV D,\s?E/;
let pattern_dh = /^MOV D,\s?H/;
let pattern_dl = /^MOV D,\s?L/;
let pattern_dm = /^MOV D,\s?M/;
let pattern_da = /^MOV D,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER E
let pattern_eb = /^MOV E,\s?B/;
let pattern_ec = /^MOV E,\s?C/;
let pattern_ed = /^MOV E,\s?D/;
let pattern_ee = /^MOV E,\s?E/;
let pattern_eh = /^MOV E,\s?H/;
let pattern_el = /^MOV E,\s?L/;
let pattern_em = /^MOV E,\s?M/;
let pattern_ea = /^MOV E,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER H
let pattern_hb = /^MOV H,\s?B/;
let pattern_hc = /^MOV H,\s?C/;
let pattern_hd = /^MOV H,\s?D/;
let pattern_he = /^MOV H,\s?E/;
let pattern_hh = /^MOV H,\s?H/;
let pattern_hl = /^MOV H,\s?L/;
let pattern_hm = /^MOV H,\s?M/;
let pattern_ha = /^MOV H,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER L
let pattern_lb = /^MOV L,\s?B/;
let pattern_lc = /^MOV L,\s?C/;
let pattern_ld = /^MOV L,\s?D/;
let pattern_le = /^MOV L,\s?E/;
let pattern_lh = /^MOV L,\s?H/;
let pattern_ll = /^MOV L,\s?L/;
let pattern_lm = /^MOV L,\s?M/;
let pattern_la = /^MOV L,\s?A/;
//REGULAR EXPRESSION FOR COPYING INTO REGISTER M
let pattern_mb = /^MOV M,\s?B/;
let pattern_mc = /^MOV M,\s?C/;
let pattern_md = /^MOV M,\s?D/;
let pattern_me = /^MOV M,\s?E/;
let pattern_mh = /^MOV M,\s?H/;
let pattern_ml = /^MOV M,\s?L/;
let pattern_ma = /^MOV M,\s?A/;


//Regular Expressions For ADDITION Instructions
let addWithCarry_B = /^ADC\sB$/;
let addWithCarry_C = /^ADC\sC$/;
let addWithCarry_D = /^ADC\sD$/;
let addWithCarry_E = /^ADC\sE$/;
let addWithCarry_H = /^ADC\sH$/;
let addWithCarry_L = /^ADC\sL$/;
let addWithCarry_M = /^ADC\sM$/;
let addWithCarry_A = /^ADC\sA$/;

let add_B = /^ADD\sB$/;
let add_C = /^ADD\sC$/;
let add_D = /^ADD\sD$/;
let add_E = /^ADD\sE$/;
let add_H = /^ADD\sH$/;
let add_L = /^ADD\sL$/;
let add_M = /^ADD\sM$/;
let add_A = /^ADD\sA$/;
//  ADI
//  ACI

//Regular Expressions For SUBTRACTION Instructions
let sub_B = /^SUB\sB$/;
let sub_C = /^SUB\sC$/;
let sub_D = /^SUB\sD$/;
let sub_E = /^SUB\sE$/;
let sub_H = /^SUB\sH$/;
let sub_L = /^SUB\sL$/;
let sub_M = /^SUB\sM$/;
let sub_A = /^SUB\sA$/;

let subWithBorrow_B = /^SBB\sB$/;
let subWithBorrow_C = /^SBB\sC$/;
let subWithBorrow_D = /^SBB\sD$/;
let subWithBorrow_E = /^SBB\sE$/;
let subWithBorrow_H = /^SBB\sH$/;
let subWithBorrow_L = /^SBB\sL$/;
let subWithBorrow_M = /^SBB\sM$/;
let subWithBorrow_A = /^SBB\sA$/;
//   SBI
//   SUI

//Regular Expressions For AND Instructions
let andWith_B = /^ANA\sB$/;
let andWith_C = /^ANA\sC$/;
let andWith_D = /^ANA\sD$/;
let andWith_E = /^ANA\sE$/;
let andWith_H = /^ANA\sH$/;
let andWith_L = /^ANA\sL$/;
let andWith_M = /^ANA\sM$/;
let andWith_A = /^ANA\sA$/;

//Regular Expressions For OR Instructions
let orWith_B = /^ORA\sB$/;
let orWith_C = /^ORA\sC$/;
let orWith_D = /^ORA\sD$/;
let orWith_E = /^ORA\sE$/;
let orWith_H = /^ORA\sH$/;
let orWith_L = /^ORA\sL$/;
let orWith_M = /^ORA\sM$/;
let orWith_A = /^ORA\sA$/;

//Regular Expressions For XOR Instructions
let xorWith_B = /^XRA\sB$/;
let xorWith_C = /^XRA\sC$/;
let xorWith_D = /^XRA\sD$/;
let xorWith_E = /^XRA\sE$/;
let xorWith_H = /^XRA\sH$/;
let xorWith_L = /^XRA\sL$/;
let xorWith_M = /^XRA\sM$/;
let xorWith_A = /^XRA\sA$/;
//   ANI
//   ORI
//   XRI


//Regular Expressions For Decrementing Registers Content By 1
let decrementRegister_B = /^DCR\sB$/;
let decrementRegister_C = /^DCR\sC$/;
let decrementRegister_D = /^DCR\sD$/;
let decrementRegister_E = /^DCR\sE$/;
let decrementRegister_H = /^DCR\sH$/;
let decrementRegister_L = /^DCR\sL$/;
let decrementRegister_M = /^DCR\sM$/;
let decrementRegister_A = /^DCR\sA$/;
//Regular Expressions For Decrementing Register Pairs Content By 1
let decrementRegisterPair_BC = /^DCX\sB$/;
let decrementRegisterPair_DE = /^DCX\sD$/;
let decrementRegisterPair_HL = /^DCX\sH$/;
let decrementRegisterPair_SP = /^DCX\sSP$/;

//Regular Expressions For Incrementing Registers Content By 1
let incrementRegister_B = /^INR\sB$/;
let incrementRegister_C = /^INR\sC$/;
let incrementRegister_D = /^INR\sD$/;
let incrementRegister_E = /^INR\sE$/;
let incrementRegister_H = /^INR\sH$/;
let incrementRegister_L = /^INR\sL$/;
let incrementRegister_M = /^INR\sM$/;
let incrementRegister_A = /^INR\sA$/;
//Regular Expressions For Incrementing Register Pairs Content By 1
let incrementRegisterPair_BC = /^INX\sB$/;
let incrementRegisterPair_DE = /^INX\sD$/;
let incrementRegisterPair_HL = /^INX\sH$/;
let incrementRegisterPair_SP = /^INX\sSP$/;

//Regular Expressions For Comparing Registers Content
let compareWith_B = /^CMP\sB$/;
let compareWith_C = /^CMP\sC$/;
let compareWith_D = /^CMP\sD$/;
let compareWith_E = /^CMP\sE$/;
let compareWith_H = /^CMP\sH$/;
let compareWith_L = /^CMP\sL$/;
let compareWith_M = /^CMP\sM$/;
let compareWith_A = /^CMP\sA$/;

//Regular Expressions For Re-Start Operations
let restartAt0 = /^RST\s0$/;
let restartAt1 = /^RST\s1$/;
let restartAt2 = /^RST\s2$/;
let restartAt3 = /^RST\s3$/;
let restartAt4 = /^RST\s4$/;
let restartAt5 = /^RST\s5$/;
let restartAt6 = /^RST\s6$/;
let restartAt7 = /^RST\s7$/;

//Regular Expressions For Poping Operations From Stack And Coping It Into R-Pair
let popFor_BC = /^POP\sB$/;
let popFor_DE = /^POP\sD$/;
let popFor_HL = /^POP\sH$/;
let popFor_PSW = /^POP\sPSW$/;

//Regular Expressions For Pushing Operations To Stack The Content Of R-Pair
let pushFrom_BC = /^PUSH\sB$/;
let pushFrom_DE = /^PUSH\sD$/;
let pushFrom_HL = /^PUSH\sH$/;
let pushFrom_PSW = /^PUSH\sPSW$/;

//Regular Expressions For DAD Instructions
let doDadWith_BC = /^DAD\sB$/;
let doDadWith_DE = /^DAD\sD$/;
let doDadWith_HL = /^DAD\sH$/;
let doDadWith_SP = /^DAD\sSP$/;

//Regular Expressions For ROTATE Instructions
let rotationOf_RLC = /^RLC$/;
let rotationOf_RRC = /^RRC$/;
let rotationOf_RAL = /^RAL$/;
let rotationOf_RAR = /^RAR$/;

//Regular Expressions For RETURN Instructions
let returnWith_RC = /^RC$/;
let returnWith_RNC = /^RNC$/;
let returnWith_RP = /^RP$/;
let returnWith_RM = /^RM$/;
let returnWith_RZ = /^RZ$/;
let returnWith_RNZ = /^RNZ$/;
let returnWith_RPE = /^RPE$/;
let returnWith_RPO = /^RPO$/;
let returnWith_RET = /^RET$/;

//Regular Expressions For Complementing
let complement_Accumulator = /^CMA$/;
let complement_CarryFlag = /^CMC$/;

//Regular Expressions For Setting Carry Flag
let setCarryFlag_STC = /^STC$/;

//Regular Expressions For Interrupts
let interrupt_DI = /^DI$/;
let interrupt_EI = /^EI$/;
let interrupt_RIM = /^RIM$/;
let interrupt_SIM = /^SIM$/;

//Regular Expressions For R-Pair Content Exchanging
let exchange_XCHG = /^XCHG$/;
let exchange_XTHL = /^XTHL$/;

//Regular Expressions For Content iitialising
let initialise_SP = /^SPHL$/;
let initialise_PC = /^PCHL$/;

//Regular Expressions For Loading Accumulator With Content Of R-Pair
let loadAccumulatorFrom_BC = /^LDAX\sB$/;
let loadAccumulatorFrom_DE = /^LDAX\sD$/;
let loadAccumulatorFrom_HL = /^LDAX\sH$/;

//Regular Expressions For Storing Accumulator Content
let storeAccumulatorValueAt_BC = /^STAX\sB$/;
let storeAccumulatorValueAt_DE = /^STAX\sD$/;
let storeAccumulatorValueAt_HL = /^STAX\sH$/;

// Regular Expressions For Decimal adjust accumulator
let decimal_DAA = /^DAA$/;

//Regular Expressions For HALT & NOP
let halt_HLT = /^HLT$/;
let nop_NOP = /^NOP$/;

// Loading Accumulator From Address
let loadWithContentOf_Address = /^LDA\s(\d{2})(\d{2})$/;

// Regular Expressions For Jump Instructions
let jumpWith_JC = /^JC\s(\d{2})(\d{2})$/;
let jumpWith_JM = /^JM\s(\d{2})(\d{2})$/;
let jumpWith_JP = /^JP\s(\d{2})(\d{2})$/;
let jumpWith_JPE = /^JPE\s(\d{2})(\d{2})$/;
let jumpWith_JPO = /^JPO\s(\d{2})(\d{2})$/;
let jumpWith_JZ = /^JZ\s(\d{2})(\d{2})$/;
let jumpWith_JNZ = /^JNZ\s(\d{2})(\d{2})$/;
let jumpWith_JMP = /^JMP\s(\d{2})(\d{2})$/;

// Regular Expressions For Imediate Data Moving Into Register/Memory
let moveImediateTo_B = /^MVI\sB,\s?(\d{2})$/;
let moveImediateTo_C = /^MVI\sC,\s?(\d{2})$/;
let moveImediateTo_D = /^MVI\sD,\s?(\d{2})$/;
let moveImediateTo_E = /^MVI\sE,\s?(\d{2})$/;
let moveImediateTo_H = /^MVI\sH,\s?(\d{2})$/;
let moveImediateTo_L = /^MVI\sL,\s?(\d{2})$/;
let moveImediateTo_M = /^MVI\sM,\s?(\d{2})$/;
let moveImediateTo_A = /^MVI\sA,\s?(\d{2})$/;

// Regular Expressions For Imediate Arithmetic
let temp_adi = /^ADI\s(\d{2})$/;
let temp_ani = /^ANI\s(\d{2})$/;
let temp_sbi = /^SBI\s(\d{2})$/;
let temp_ori = /^ORI\s(\d{2})$/;
let temp_sui = /^SUI\s(\d{2})$/;
let temp_aci = /^ACI\s(\d{2})$/;
let temp_xri = /^XRI\s(\d{2})$/;

//  // Regular Expressions For LXI 
let lxi_B = /^LXI\sB,\s?(\d{2})(\d{2})$/;
let lxi_D = /^LXI\sD,\s?(\d{2})(\d{2})$/;
let lxi_H = /^LXI\sH,\s?(\d{2})(\d{2})$/;
let lxi_SP = /^LXI\sSP,\s?(\d{2})(\d{2})$/;

//   Regular Expressions For CALL
let call_call = /^CALL\s(\d{2})(\d{2})$/;
let call_cc = /^CC\s(\d{2})(\d{2})$/;
let call_cm = /^CM\s(\d{2})(\d{2})$/;
let call_cnc = /^CNC\s(\d{2})(\d{2})$/;
let call_cnz = /^CNZ\s(\d{2})(\d{2})$/;
let call_cp = /^CP\s(\d{2})(\d{2})$/;
let call_cpe = /^CPE\s(\d{2})(\d{2})$/;
let call_cpo = /^CPO\s(\d{2})(\d{2})$/;
let call_cz = /^CZ\s(\d{2})(\d{2})$/;
let call_cpi = /^CPI\s(\d{2})$/;

//   Regular Expressions For IN & OUT
let temp_in = /^IN\s(\d{2})$/;
let temp_out = /^OUT\s(\d{2})$/;

//   Regular Expressions For REST Instructions
let lhld_temp = /^LHLD\s(\d{2})(\d{2})$/;
let shld_temp = /^SHLD\s(\d{2})(\d{2})$/;
let sta_temp = /^STA\s(\d{2})(\d{2})$/;









export class Assembler{
    constructor(){
        this.ans = [];

    }
    convert(single_str, i)
    {
        if(pattern_ab.test(single_str)==true)
        {
            this.ans.push("78");
        }
        else if(pattern_ac.test(single_str)==true)
        {
            this.ans.push("79");
        }
        else if(pattern_ad.test(single_str)==true)
        {
            this.ans.push("7A");
        }
        else if(pattern_ae.test(single_str)==true)
        {
            this.ans.push("7B");
        }
        else if(pattern_ah.test(single_str)==true)
        {
            this.ans.push("7C");
        }
        else if(pattern_al.test(single_str)==true)
        {
            this.ans.push("7D");
        }
        else if(pattern_am.test(single_str)==true)
        {
            this.ans.push("7E");
        }
        else if(pattern_aa.test(single_str)==true)
        {
            this.ans.push("7F");
        }                                             //FOR COPYING INTO REGISTER B
        else if(pattern_bb.test(single_str)==true)
        {
            this.ans.push("40");
        }
        else if(pattern_bc.test(single_str)==true)
        {
            this.ans.push("41");
        }
        else if(pattern_bd.test(single_str)==true)
        {
            this.ans.push("42");
        }
        else if(pattern_be.test(single_str)==true)
        {
            this.ans.push("43");
        }
        else if(pattern_bh.test(single_str)==true)
        {
            this.ans.push("44");
        }
        else if(pattern_bl.test(single_str)==true)
        {
            this.ans.push("45");
        }
        else if(pattern_bm.test(single_str)==true)
        {
            this.ans.push("46");
        }
        else if(pattern_ba.test(single_str)==true)
        {
            this.ans.push("47");
        }                                             //FOR COPYING INTO REGISTER C
        else if(pattern_cb.test(single_str)==true)
        {
            this.ans.push("48");
        }
        else if(pattern_cc.test(single_str)==true)
        {
            this.ans.push("49");
        }
        else if(pattern_cd.test(single_str)==true)
        {
            this.ans.push("4A");
        }
        else if(pattern_ce.test(single_str)==true)
        {
            this.ans.push("4B");
        }
        else if(pattern_ch.test(single_str)==true)
        {
            this.ans.push("4C");
        }
        else if(pattern_cl.test(single_str)==true)
        {
            this.ans.push("4D");
        }
        else if(pattern_cm.test(single_str)==true)
        {
            this.ans.push("4E");
        }
        else if(pattern_ca.test(single_str)==true)
        {
            this.ans.push("4F");
        }                                                  //FOR COPYING INTO REGISTER D
        else if(pattern_db.test(single_str)==true)
        {
            this.ans.push("50");
        }
        else if(pattern_dc.test(single_str)==true)
        {
            this.ans.push("51");
        }
        else if(pattern_dd.test(single_str)==true)
        {
            this.ans.push("52");
        }
        else if(pattern_de.test(single_str)==true)
        {
            this.ans.push("53");
        }
        else if(pattern_dh.test(single_str)==true)
        {
            this.ans.push("54");
        }
        else if(pattern_dl.test(single_str)==true)
        {
            this.ans.push("55");
        }
        else if(pattern_dm.test(single_str)==true)
        {
            this.ans.push("56");
        }
        else if(pattern_da.test(single_str)==true)
        {
            this.ans.push("57");
        }                                                  //FOR COPYING INTO REGISTER E
        else if(pattern_eb.test(single_str)==true)
        {
            this.ans.push("58");
        }
        else if(pattern_ec.test(single_str)==true)
        {
            this.ans.push("59");
        }
        else if(pattern_ed.test(single_str)==true)
        {
            this.ans.push("5A");
        }
        else if(pattern_ee.test(single_str)==true)
        {
            this.ans.push("5B");
        }
        else if(pattern_eh.test(single_str)==true)
        {
            this.ans.push("5C");
        }
        else if(pattern_el.test(single_str)==true)
        {
            this.ans.push("5D");
        }
        else if(pattern_em.test(single_str)==true)
        {
            this.ans.push("5E");
        }
        else if(pattern_ea.test(single_str)==true)
        {
            this.ans.push("5F");
        }                                                  //FOR COPYING INTO REGISTER H
        else if(pattern_hb.test(single_str)==true)
        {
            this.ans.push("60");
        }
        else if(pattern_hc.test(single_str)==true)
        {
            this.ans.push("61");
        }
        else if(pattern_hd.test(single_str)==true)
        {
            this.ans.push("62");
        }
        else if(pattern_he.test(single_str)==true)
        {
            this.ans.push("63");
        }
        else if(pattern_hh.test(single_str)==true)
        {
            this.ans.push("64");
        }
        else if(pattern_hl.test(single_str)==true)
        {
            this.ans.push("65");
        }
        else if(pattern_hm.test(single_str)==true)
        {
            this.ans.push("66");
        }
        else if(pattern_ha.test(single_str)==true)
        {
            this.ans.push("67");
        }                                                  //FOR COPYING INTO REGISTER L
        else if(pattern_lb.test(single_str)==true)
        {
            this.ans.push("68");
        }
        else if(pattern_lc.test(single_str)==true)
        {
            this.ans.push("69");
        }
        else if(pattern_ld.test(single_str)==true)
        {
            this.ans.push("6A");
        }
        else if(pattern_le.test(single_str)==true)
        {
            this.ans.push("6B");
        }
        else if(pattern_lh.test(single_str)==true)
        {
            this.ans.push("6C");
        }
        else if(pattern_ll.test(single_str)==true)
        {
            this.ans.push("6D");
        }
        else if(pattern_lm.test(single_str)==true)
        {
            this.ans.push("6E");
        }
        else if(pattern_la.test(single_str)==true)
        {
            this.ans.push("6F");
        }                                                  //FOR COPYING INTO REGISTER M
        else if(pattern_mb.test(single_str)==true)
        {
            this.ans.push("70");
        }
        else if(pattern_mc.test(single_str)==true)
        {
            this.ans.push("71");
        }
        else if(pattern_md.test(single_str)==true)
        {
            this.ans.push("72");
        }
        else if(pattern_me.test(single_str)==true)
        {
            this.ans.push("73");
        }
        else if(pattern_mh.test(single_str)==true)
        {
            this.ans.push("74");
        }
        else if(pattern_ml.test(single_str)==true)
        {
            this.ans.push("75");
        }
        else if(pattern_ma.test(single_str)==true)
        {
            this.ans.push("77");
        }                                     // For Adding Without Carry
        else if(add_B.test(single_str)==true)
        {
            this.ans.push("80");
        }
        else if(add_C.test(single_str)==true)
        {
            this.ans.push("81");
        }
        else if(add_D.test(single_str)==true)
        {
            this.ans.push("82");
        }
        else if(add_E.test(single_str)==true)
        {
            this.ans.push("83");
        }
        else if(add_H.test(single_str)==true)
        {
            this.ans.push("84");
        }
        else if(add_L.test(single_str)==true)
        {
            this.ans.push("85");
        }
        else if(add_M.test(single_str)==true)
        {
            this.ans.push("86");
        }
        else if(add_A.test(single_str)==true)
        {
            this.ans.push("87");
        }                                     // For Adding With Carry
        else if(addWithCarry_B.test(single_str)==true)
        {
            this.ans.push("88");
        }
        else if(addWithCarry_C.test(single_str)==true)
        {
            this.ans.push("89");
        }
        else if(addWithCarry_D.test(single_str)==true)
        {
            this.ans.push("8A");
        }
        else if(addWithCarry_E.test(single_str)==true)
        {
            this.ans.push("8B");
        }
        else if(addWithCarry_H.test(single_str)==true)
        {
            this.ans.push("8C");
        }
        else if(addWithCarry_L.test(single_str)==true)
        {
            this.ans.push("8D");
        }
        else if(addWithCarry_M.test(single_str)==true)
        {
            this.ans.push("8E");
        }
        else if(addWithCarry_A.test(single_str)==true)
        {
            this.ans.push("8F");
        }                                     // For Subtracting Without Carry
        else if(sub_B.test(single_str)==true)
        {
            this.ans.push("90");
        }
        else if(sub_C.test(single_str)==true)
        {
            this.ans.push("91");
        } 
        else if(sub_D.test(single_str)==true)
        {
            this.ans.push("92");
        } 
        else if(sub_E.test(single_str)==true)
        {
            this.ans.push("93");
        } 
        else if(sub_H.test(single_str)==true)
        {
            this.ans.push("94");
        } 
        else if(sub_L.test(single_str)==true)
        {
            this.ans.push("95");
        } 
        else if(sub_M.test(single_str)==true)
        {
            this.ans.push("96");
        } 
        else if(sub_A.test(single_str)==true)
        {
            this.ans.push("97");
        }                                     // For Subtracting With Carry
        else if(subWithBorrow_B.test(single_str)==true)
        {
            this.ans.push("98");
        }
        else if(subWithBorrow_C.test(single_str)==true)
        {
            this.ans.push("99");
        }
        else if(subWithBorrow_D.test(single_str)==true)
        {
            this.ans.push("9A");
        }
        else if(subWithBorrow_E.test(single_str)==true)
        {
            this.ans.push("9B");
        }
        else if(subWithBorrow_H.test(single_str)==true)
        {
            this.ans.push("9C");
        }
        else if(subWithBorrow_L.test(single_str)==true)
        {
            this.ans.push("9D");
        }
        else if(subWithBorrow_M.test(single_str)==true)
        {
            this.ans.push("9E");
        }
        else if(subWithBorrow_A.test(single_str)==true)
        {
            this.ans.push("9F");
        }                                                // For AND Operations
        else if(andWith_B.test(single_str)==true)
        {
            this.ans.push("A0");
        }
        else if(andWith_C.test(single_str)==true)
        {
            this.ans.push("A1");
        }
        else if(andWith_D.test(single_str)==true)
        {
            this.ans.push("A2");
        }
        else if(andWith_E.test(single_str)==true)
        {
            this.ans.push("A3");
        }
        else if(andWith_H.test(single_str)==true)
        {
            this.ans.push("A4");
        }
        else if(andWith_L.test(single_str)==true)
        {
            this.ans.push("A5");
        }
        else if(andWith_M.test(single_str)==true)
        {
            this.ans.push("A6");
        }
        else if(andWith_A.test(single_str)==true)
        {
            this.ans.push("A7");
        }                                                // For OR Operations
        else if(orWith_B.test(single_str)==true)
        {
            this.ans.push("B0");
        }
        else if(orWith_C.test(single_str)==true)
        {
            this.ans.push("B1");
        }
        else if(orWith_D.test(single_str)==true)
        {
            this.ans.push("B2");
        }
        else if(orWith_E.test(single_str)==true)
        {
            this.ans.push("B3");
        }
        else if(orWith_H.test(single_str)==true)
        {
            this.ans.push("B4");
        }
        else if(orWith_L.test(single_str)==true)
        {
            this.ans.push("B5");
        }
        else if(orWith_M.test(single_str)==true)
        {
            this.ans.push("B6");
        }
        else if(orWith_A.test(single_str)==true)
        {
            this.ans.push("B7");
        }                                                // For XOR Operations
        else if(xorWith_B.test(single_str)==true)
        {
            this.ans.push("A8");
        }
        else if(xorWith_C.test(single_str)==true)
        {
            this.ans.push("A9");
        }
        else if(xorWith_D.test(single_str)==true)
        {
            this.ans.push("AA");
        }
        else if(xorWith_E.test(single_str)==true)
        {
            this.ans.push("AB");
        }
        else if(xorWith_H.test(single_str)==true)
        {
            this.ans.push("AC");
        }
        else if(xorWith_L.test(single_str)==true)
        {
            this.ans.push("AD");
        }
        else if(xorWith_M.test(single_str)==true)
        {
            this.ans.push("AE");
        }
        else if(xorWith_A.test(single_str)==true)
        {
            this.ans.push("AF");
        }                                                // For Decrementing Registers Content By 1 
        else if(decrementRegister_B.test(single_str)==true)
        {
            this.ans.push("5");
        }
        else if(decrementRegister_C.test(single_str)==true)
        {
            this.ans.push("0D");
        }
        else if(decrementRegister_D.test(single_str)==true)
        {
            this.ans.push("15");
        }
        else if(decrementRegister_E.test(single_str)==true)
        {
            this.ans.push("1D");
        }
        else if(decrementRegister_H.test(single_str)==true)
        {
            this.ans.push("25");
        }
        else if(decrementRegister_L.test(single_str)==true)
        {
            this.ans.push("2D");
        }
        else if(decrementRegister_M.test(single_str)==true)
        {
            this.ans.push("35");
        }
        else if(decrementRegister_A.test(single_str)==true)
        {
            this.ans.push("3D");
        }                                               // For Decrementing Registers Pairs Content By 1 
        else if(decrementRegisterPair_BC.test(single_str)==true)
        {
            this.ans.push("0B");
        }
        else if(decrementRegisterPair_DE.test(single_str)==true)
        {
            this.ans.push("1B");
        }
        else if(decrementRegisterPair_HL.test(single_str)==true)
        {
            this.ans.push("2B");
        }
        else if(decrementRegisterPair_SP.test(single_str)==true)
        {
            this.ans.push("3B");
        }                                                // For Incrementing Registers Content By 1 
        else if(incrementRegister_B.test(single_str)==true)
        {
            this.ans.push("4");
        }
        else if(incrementRegister_C.test(single_str)==true)
        {
            this.ans.push("0C");
        }
        else if(incrementRegister_D.test(single_str)==true)
        {
            this.ans.push("14");
        }
        else if(incrementRegister_E.test(single_str)==true)
        {
            this.ans.push("1C");
        }
        else if(incrementRegister_H.test(single_str)==true)
        {
            this.ans.push("24");
        }
        else if(incrementRegister_L.test(single_str)==true)
        {
            this.ans.push("2C");
        }
        else if(incrementRegister_M.test(single_str)==true)
        {
            this.ans.push("34");
        }
        else if(incrementRegister_A.test(single_str)==true)
        {
            this.ans.push("3C");
        }                                               // For Incrementing Registers Pairs Content By 1 
        else if(incrementRegisterPair_BC.test(single_str)==true)
        {
            this.ans.push("3");
        }
        else if(incrementRegisterPair_DE.test(single_str)==true)
        {
            this.ans.push("13");
        }
        else if(incrementRegisterPair_HL.test(single_str)==true)
        {
            this.ans.push("23");
        }
        else if(incrementRegisterPair_SP.test(single_str)==true)
        {
            this.ans.push("33");
        }                                                   //For Comparing Registers Content
        else if(compareWith_B.test(single_str)==true)
        {
            this.ans.push("B8");
        }
        else if(compareWith_C.test(single_str)==true)
        {
            this.ans.push("B9");
        }
        else if(compareWith_D.test(single_str)==true)
        {
            this.ans.push("BA");
        }
        else if(compareWith_E.test(single_str)==true)
        {
            this.ans.push("BB");
        }
        else if(compareWith_H.test(single_str)==true)
        {
            this.ans.push("BC");
        }
        else if(compareWith_L.test(single_str)==true)
        {
            this.ans.push("BD");
        }
        else if(compareWith_M.test(single_str)==true)
        {
            this.ans.push("BE");
        }
        else if(compareWith_A.test(single_str)==true)
        {
            this.ans.push("BF");
        }                                               // For Re-Start Operations
        else if(restartAt0.test(single_str)==true)
        {
            this.ans.push("C7");
        }
        else if(restartAt1.test(single_str)==true)
        {
            this.ans.push("CF");
        }
        else if(restartAt2.test(single_str)==true)
        {
            this.ans.push("D7");
        }
        else if(restartAt3.test(single_str)==true)
        {
            this.ans.push("DF");
        }
        else if(restartAt4.test(single_str)==true)
        {
            this.ans.push("E7");
        }
        else if(restartAt5.test(single_str)==true)
        {
            this.ans.push("EF");
        }
        else if(restartAt6.test(single_str)==true)
        {
            this.ans.push("F7");
        }
        else if(restartAt7.test(single_str)==true)
        {
            this.ans.push("FF");
        }                                           //For Poping Operations From Stack And Coping It Into R-Pair
        else if(popFor_BC.test(single_str)==true)
        {
            this.ans.push("C1");
        }
        else if(popFor_DE.test(single_str)==true)
        {
            this.ans.push("D1");
        }
        else if(popFor_HL.test(single_str)==true)
        {
            this.ans.push("E1");
        }
        else if(popFor_PSW.test(single_str)==true)
        {
            this.ans.push("F1");
        }                                           // For Pushing Operations To Stack The Content Of R-Pair
        else if(pushFrom_BC.test(single_str)==true)
        {
            this.ans.push("C5");
        }
        else if(pushFrom_DE.test(single_str)==true)
        {
            this.ans.push("D5");
        }
        else if(pushFrom_HL.test(single_str)==true)
        {
            this.ans.push("E5");
        }
        else if(pushFrom_PSW.test(single_str)==true)
        {
            this.ans.push("F5");
        }                                                   //  For DAD Instructions
        else if(doDadWith_BC.test(single_str)==true)
        {
            this.ans.push("9");
        }
        else if(doDadWith_DE.test(single_str)==true)
        {
            this.ans.push("19");
        }
        else if(doDadWith_HL.test(single_str)==true)
        {
            this.ans.push("29");
        }
        else if(doDadWith_SP.test(single_str)==true)
        {
            this.ans.push("39");
        }                                           //  For ROTATE Instructions
        else if(rotationOf_RLC.test(single_str)==true)
        {
            this.ans.push("7");
        }
        else if(rotationOf_RRC.test(single_str)==true)
        {
            this.ans.push("0F");
        }
        else if(rotationOf_RAL.test(single_str)==true)
        {
            this.ans.push("17");
        }
        else if(rotationOf_RAR.test(single_str)==true)
        {
            this.ans.push("1F");
        }                                       //      For RETURN Instructions
        else if(returnWith_RC.test(single_str)==true)
        {
            this.ans.push("D8");
        }
        else if(returnWith_RNC.test(single_str)==true)
        {
            this.ans.push("D0");
        }
        else if(returnWith_RP.test(single_str)==true)
        {
            this.ans.push("F0");
        }
        else if(returnWith_RM.test(single_str)==true)
        {
            this.ans.push("F8");
        }
        else if(returnWith_RZ.test(single_str)==true)
        {
            this.ans.push("C8");
        }
        else if(returnWith_RNZ.test(single_str)==true)
        {
            this.ans.push("C0");
        }
        else if(returnWith_RPE.test(single_str)==true)
        {
            this.ans.push("E8");
        }
        else if(returnWith_RPO.test(single_str)==true)
        {
            this.ans.push("E0");
        }
        else if(returnWith_RET.test(single_str)==true)
        {
            this.ans.push("C9");
        }                                                        // For Complementing
        else if(complement_Accumulator.test(single_str)==true)
        {
            this.ans.push("2F");
        }
        else if(complement_CarryFlag.test(single_str)==true)
        {
            this.ans.push("3F");
        }                                                       // For Setting Carry Flag
        else if(setCarryFlag_STC.test(single_str)==true)
        {
            this.ans.push("37");
        }                                                          //   For Interrupts
        else if(interrupt_DI.test(single_str)==true)
        {
            this.ans.push("F3");
        }
        else if(interrupt_EI.test(single_str)==true)
        {
            this.ans.push("FB");
        }
        else if(interrupt_RIM.test(single_str)==true)
        {
            this.ans.push("20");
        }
        else if(interrupt_SIM.test(single_str)==true)
        {
            this.ans.push("30");
        }                                                   //   For R-Pair Content Exchanging
        else if(exchange_XCHG.test(single_str)==true)
        {
            this.ans.push("EB");
        }
        else if(exchange_XTHL.test(single_str)==true)
        {
            this.ans.push("E3");
        }                                                    //   For Content iitialising
        else if(initialise_SP.test(single_str)==true)
        {
            this.ans.push("F9");
        }
        else if(initialise_PC.test(single_str)==true)
        {
            this.ans.push("E9");
        }                                                   //      For Loading Accumulator
        else if(loadAccumulatorFrom_BC.test(single_str)==true)
        {
            this.ans.push("0A");
        } 
        else if(loadAccumulatorFrom_DE.test(single_str)==true)
        {
            this.ans.push("1A");
        } 
        else if(loadAccumulatorFrom_HL.test(single_str)==true)
        {
            this.ans.push("7E");
        }                                                     // For Storing Accumulator Content
        else if(storeAccumulatorValueAt_BC.test(single_str)==true)
        {
            this.ans.push("2");
        } 
        else if(storeAccumulatorValueAt_DE.test(single_str)==true)
        {
            this.ans.push("12");
        } 
        else if(storeAccumulatorValueAt_HL.test(single_str)==true)
        {
            this.ans.push("77");
        }                                                       // For Decimal adjust accumulator
        else if(decimal_DAA.test(single_str)==true)
        {
            this.ans.push("27");
        }                                                       // For HALT & NOP   
        else if(nop_NOP.test(single_str)==true)
        {
            this.ans.push("0");
        }  
        else if(halt_HLT.test(single_str)==true)
        {
            this.ans.push("76");
        }                                                        // Loading Accumulator From Address
        else if(loadWithContentOf_Address.test(single_str)==true)
        {
            let temp_LDA = single_str.match(loadWithContentOf_Address);
            this.ans.push("3A");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }                                                        // For Jump Instructions
        else if(jumpWith_JC.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JC);
            this.ans.push("DA");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JM.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JM);
            this.ans.push("FA");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JP.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JP);
            this.ans.push("F2");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JPE.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JPE);
            this.ans.push("EA");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JPO.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JPO);
            this.ans.push("E2");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JZ.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JZ);
            this.ans.push("CA");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JNZ.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JNZ);
            this.ans.push("C2");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(jumpWith_JMP.test(single_str)==true)
        {
            let temp_LDA = single_str.match(jumpWith_JMP);
            this.ans.push("C3");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }                                               //    For Imediate Data Moving Into Register/Memory
        else if(moveImediateTo_B.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_B);
            this.ans.push("06");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_C.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_C);
            this.ans.push("0E");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_D.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_D);
            this.ans.push("16");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_E.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_E);
            this.ans.push("1E");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_H.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_H);
            this.ans.push("26");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_L.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_L);
            this.ans.push("2E");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_M.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_M);
            this.ans.push("36");
            this.ans.push(temp_LDA[1]);
        }
        else if(moveImediateTo_A.test(single_str)==true)
        {
            let temp_LDA = single_str.match(moveImediateTo_A);
            this.ans.push("3E");
            this.ans.push(temp_LDA[1]);
        }                                                       // Regular Expressions For Imediate Arithmetic
        else if(temp_adi.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_adi);
            this.ans.push("C6");
            this.ans.push(temp_LDA[1]);
        }
        else if(temp_ani.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_ani);
            this.ans.push("E6");
            this.ans.push(temp_LDA[1]);
        }
        else if(temp_sbi.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_sbi);
            this.ans.push("DE");
            this.ans.push(temp_LDA[1]);
        }
        else if(temp_ori.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_ori);
            this.ans.push("F6");
            this.ans.push(temp_LDA[1]);
        }
        else if(temp_sui.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_sui);
            this.ans.push("D6");
            this.ans.push(temp_LDA[1]);
        }
        else if(temp_aci.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_aci);
            this.ans.push("CE");
            this.ans.push(temp_LDA[1]);
        }
        else if(temp_xri.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_xri);
            this.ans.push("EE");
            this.ans.push(temp_LDA[1]);
        }                               // Regular Expressions For LXI 
        else if(lxi_B.test(single_str)==true)
        {
            let temp_LDA = single_str.match(lxi_B);
            this.ans.push("01");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(lxi_D.test(single_str)==true)
        {
            let temp_LDA = single_str.match(lxi_D);
            this.ans.push("11");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(lxi_H.test(single_str)==true)
        {
            let temp_LDA = single_str.match(lxi_H);
            this.ans.push("21");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(lxi_SP.test(single_str)==true)
        {
            let temp_LDA = single_str.match(lxi_SP);
            this.ans.push("31");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }                                           //   Regular Expressions For CALL
        else if(call_call.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_call);
            this.ans.push("CD");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cc.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cc);
            this.ans.push("DC");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cm.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cm);
            this.ans.push("FC");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cnz.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cnz);
            this.ans.push("C4");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cnc.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cnc);
            this.ans.push("D4");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cp.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cp);
            this.ans.push("F4");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cpe.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cpe);
            this.ans.push("EC");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cpo.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cpo);
            this.ans.push("E4");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(call_cz.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cz);
            this.ans.push("CC");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        }
        else if(call_cpi.test(single_str)==true)
        {
            let temp_LDA = single_str.match(call_cpi);
            this.ans.push("FE");
            this.ans.push(temp_LDA[1]);
        }                                       //   Regular Expressions For IN & OUT
        else if(temp_in.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_in);
            this.ans.push("DB");
            this.ans.push(temp_LDA[1]);
        }  
        else if(temp_out.test(single_str)==true)
        {
            let temp_LDA = single_str.match(temp_out);
            this.ans.push("D3");
            this.ans.push(temp_LDA[1]);
        }                                           //   Regular Expressions For REST Instructions
        else if(lhld_temp.test(single_str)==true)
        {
            let temp_LDA = single_str.match(lhld_temp);
            this.ans.push("2A");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(shld_temp.test(single_str)==true)
        {
            let temp_LDA = single_str.match(shld_temp);
            this.ans.push("22");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else if(sta_temp.test(single_str)==true)
        {
            let temp_LDA = single_str.match(sta_temp);
            this.ans.push("32");
            this.ans.push(temp_LDA[2]);
            this.ans.push(temp_LDA[1]);
        } 
        else
        {
            console.log("Wrong Syntax At Line "+ i);
            this.ans = "";
            return 0;
        }
          

    }
    

    converter(assembly_code){
        this.ans = [];
        let i=1;
        for(let each of assembly_code){
            this.convert(each, i);
            i=i+1;
        }
        return this.ans;
    }
}
