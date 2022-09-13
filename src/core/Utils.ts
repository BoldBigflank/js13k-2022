export const sample = (group: any[]): any => {
    return group[Math.floor(Math.random() * group.length)]
}

// https://en.wikipedia.org/wiki/List_of_Egyptian_hieroglyphs
// eslint-disable-next-line max-len
export const heiroglyphics = ['𓀀', '𓀁', '𓀂', '𓀃', '𓀄', '𓀅', '𓀆', '𓀇', '𓀈', '𓀉', '𓀊', '𓀋', '𓀌', '𓀍', '𓀎', '𓀏', '𓃒', '𓃓', '𓃔', '𓃕', '𓃖', '𓃗', '𓃘', '𓃙', '𓃚', '𓃛', '𓃜', '𓃝', '𓃞', '𓃟', '𓃠', '𓃡', '𓃢', '𓃣', '𓃤', '𓃥', '𓃦', '𓃧', '𓃨', '𓃩', '𓃪', '𓃫', '𓃬', '𓃭', '𓃮', '𓃯', '𓃰', '𓃱', '𓃲', '𓃳', '𓃴', '𓃵', '𓃶', '𓃷', '𓃸', '𓃹', '𓃺', '𓃻', '𓃼', '𓃽']

export const jarHeads = ['𓃻', '𓁢', '𓁵', '𓁛']

export const loremIpsum = (length: number) => {
    let result = ''
    for(let i = 0; i < length; i++) {
        result += heiroglyphics[Math.floor(Math.random() * heiroglyphics.length)]
    }
    return result
}