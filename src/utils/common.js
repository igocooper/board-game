export function calculateAttack(attacker, dicesResults) {
    const crit =  dicesResults.crit >= (7 - attacker.crit);
    const attack = crit ?
    (dicesResults.attack * 2) + attacker.strength :
    dicesResults.attack + attacker.strength

    return {
        attack: attack,
        block: attacker.defense ? dicesResults.block + attacker.defense : 0,
        dodge: dicesResults.dodge >= (7 - attacker.agility),
        luck: dicesResults.luck === 6,
        crit: crit
    }
};

export function calculateDefense(defencingPlayer, dicesResults) {
    const luck = dicesResults.luck === 6;

    return {
        attack: luck ? dicesResults.attack + defencingPlayer.strength : 0,
        block: defencingPlayer.defense ? dicesResults.block + defencingPlayer.defense : 0,
        crit: dicesResults.crit >= (7 - defencingPlayer.crit),
        dodge: dicesResults.dodge >= (7 - defencingPlayer.agility),
        luck: false
    }
};

export function calculateDamage(attacker, defencer) {
    // calculate damage 
    let defencerDamage = attacker.attack - defencer.block;
    // if defencer dodged then no damage is done
    if (defencer.dodge) {
        defencerDamage = 0;
    }
    // if attacker has luck he omits defencer armor
    if (attacker.luck) {
        defencerDamage = attacker.attack;
    }
    
    return defencerDamage >= 0 ? defencerDamage : 0
}
