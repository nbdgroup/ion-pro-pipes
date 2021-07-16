import { Pipe } from '@angular/core';
import { isVowel } from '../helpers/helpers';
/**
 * Takes a singular entity string and pluralizes it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is pluralized -- this
 * means that if "your story" was passed in, "your stories" would be passed out.
 *
 * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
 * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
 *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
 *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
 */
export class MakePluralStringPipe {
    constructor() {
        this.irregularMap = {
            addendum: 'addenda',
            alga: 'algae',
            alumna: 'alumnae',
            alumnus: 'alumni',
            analysis: 'analyses',
            antenna: 'antennae',
            appendix: 'appendices',
            aquarium: 'aquaria',
            arch: 'arches',
            axe: 'axes',
            axis: 'axes',
            bacillus: 'bacilli',
            bacterium: 'bacteria',
            basis: 'bases',
            batch: 'batches',
            beach: 'beaches',
            beau: 'beaux',
            bison: 'bison',
            brush: 'brushes',
            buffalo: 'buffaloes',
            bureau: 'bureaus',
            bus: 'busses',
            cactus: 'cacti',
            calf: 'calves',
            chateau: 'chateaux',
            cherry: 'cherries',
            child: 'children',
            church: 'churches',
            circus: 'circuses',
            cod: 'cod',
            corps: 'corps',
            corpus: 'corpora',
            crisis: 'crises',
            criterion: 'criteria',
            curriculum: 'curricula',
            datum: 'data',
            deer: 'deer',
            diagnosis: 'diagnoses',
            die: 'dice',
            domino: 'dominoes',
            dwarf: 'dwarves',
            echo: 'echoes',
            elf: 'elves',
            ellipsis: 'ellipses',
            embargo: 'embargoes',
            emphasis: 'emphases',
            erratum: 'errata',
            fax: 'faxes',
            fireman: 'firemen',
            fish: 'fish',
            flush: 'flushes',
            focus: 'foci',
            foot: 'feet',
            formula: 'formulas',
            fungus: 'fungi',
            genus: 'genera',
            goose: 'geese',
            grafito: 'grafiti',
            half: 'halves',
            hero: 'heroes',
            hoax: 'hoaxes',
            hoof: 'hooves',
            hypothesis: 'hypotheses',
            index: 'indices',
            kiss: 'kisses',
            knife: 'knives',
            leaf: 'leaves',
            life: 'lives',
            loaf: 'loaves',
            louse: 'lice',
            man: 'men',
            mango: 'mangoes',
            matrix: 'matrices',
            means: 'means',
            medium: 'media',
            memorandum: 'memoranda',
            millennium: 'milennia',
            moose: 'moose',
            mosquito: 'mosquitoes',
            motto: 'mottoes',
            mouse: 'mice',
            nebula: 'nebulae',
            neurosis: 'neuroses',
            nucleus: 'nuclei',
            oasis: 'oases',
            octopus: 'octopodes',
            ovum: 'ova',
            ox: 'oxen',
            paralysis: 'paralyses',
            parenthesis: 'parentheses',
            person: 'people',
            phenomenon: 'phenomena',
            plateau: 'plateaux',
            potato: 'potatoes',
            quiz: 'quizzes',
            radius: 'radii',
            reflex: 'reflexes',
            'runner-up': 'runners-up',
            scampo: 'scampi',
            scarf: 'scarves',
            scissors: 'scissors',
            scratch: 'scratches',
            self: 'selves',
            series: 'series',
            sheaf: 'sheaves',
            sheep: 'sheep',
            shelf: 'shelves',
            'son-in-law': 'sons-in-law',
            species: 'species',
            splash: 'splashes',
            stimulus: 'stimuli',
            stitch: 'stitches',
            stratum: 'strata',
            syllabus: 'syllabi',
            symposium: 'symposia',
            synopsis: 'synopses',
            synthesis: 'syntheses',
            tableau: 'tableaux',
            tax: 'taxes',
            that: 'those',
            thesis: 'theses',
            thief: 'thieves',
            this: 'these',
            tomato: 'tomatoes',
            tooth: 'teeth',
            tornado: 'tornadoes',
            torpedo: 'torpedoes',
            vertebra: 'vertebrae',
            veto: 'vetoes',
            vita: 'vitae',
            volcano: 'volcanoes',
            waltz: 'waltzes',
            wash: 'washes',
            watch: 'watches',
            wharf: 'wharves',
            wife: 'wives',
            wolf: 'wolves',
            woman: 'women',
            zero: 'zeroes',
        };
    }
    transform(singularEntity, quantity = 0) {
        if (!singularEntity || singularEntity === '') {
            return '';
        }
        if (quantity === 1) {
            return singularEntity;
        }
        else {
            const lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
            if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                    return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                }
                return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
            }
            else if (lastWord[lastWord.length - 1] === 'y') {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return isVowel(lastWord[lastWord.length - 2])
                    ? singularEntity + 's'
                    : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
            }
            else if (lastWord[lastWord.length - 1] === 's') {
                return singularEntity + 'es';
            }
            else {
                return singularEntity + 's';
            }
        }
    }
}
MakePluralStringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'makePluralString',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL25nLXBpcGVzL3BpcGVzL3N0cmluZy9wbHVyYWxpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTdDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxPQUFPLG9CQUFvQjtJQWhCakM7UUFpQlUsaUJBQVksR0FBUTtZQUMxQixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxRQUFRO1lBQ2QsR0FBRyxFQUFFLE1BQU07WUFDWCxJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEdBQUcsRUFBRSxRQUFRO1lBQ2IsTUFBTSxFQUFFLE9BQU87WUFDZixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxVQUFVO1lBQ2xC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Q0FBQzs7O1lBbE1GLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1Zvd2VsIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbWFrZVBsdXJhbFN0cmluZycsXHJcbn0pXHJcblxyXG4vKipcclxuICogVGFrZXMgYSBzaW5ndWxhciBlbnRpdHkgc3RyaW5nIGFuZCBwbHVyYWxpemVzIGl0LlxyXG4gKiBVc2VzIGJvdGggbmFpdmUgYW5kIGhvbGRvdXQtbGlzdCBhcHByb2FjaGVzLlxyXG4gKiBJZiBzZXZlcmFsIHdvcmRzIGFwcGVhciBpbiB0aGUgc3RyaW5nLCBvbmx5IHRoZSBsYXN0IHdvcmQgaXMgcGx1cmFsaXplZCAtLSB0aGlzXHJcbiAqIG1lYW5zIHRoYXQgaWYgXCJ5b3VyIHN0b3J5XCIgd2FzIHBhc3NlZCBpbiwgXCJ5b3VyIHN0b3JpZXNcIiB3b3VsZCBiZSBwYXNzZWQgb3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2luZ3VsYXJFbnRpdHkgLSBFbnRpdHkgdG8gcGx1cmFsaXplLiBQYXNzIGFzIGEgc2luZ3VsYXIgKCdzdG9yeScgb3IgJ2hvdXNlJykuXHJcbiAqICAgICAgICAgIE5PVEU6IFRoZSBsYXN0IHdvcmQgaXMgZXhhbWluZWQuIFNvIHlvdSBjYW4gcGFzcyBpbiBlLmcuICdteSBzdG9yeScuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcXVhbnRpdHk9MF0gcXVhbnRpdHkgLSBIb3cgbWFueSBvZiB0aGUgZW50aXR5IGFyZSB0aGVyZT8gSWYgbGVmdCBibGFuaywgdGhpcyB3aWxsXHJcbiAqICAgICAgICAgIHBsdXJhbGl6ZSB0aGUgc3RyaW5nIChlLmcuICdzdG9yeScgLT4gJ3N0b3JpZXMnLCAnaG91c2UnIC0+ICdob3VzZXMnKS4gSWYgZ2l2ZW4gYSB2YWx1ZSxcclxuICogICAgICAgICAgdGhpcyB3aWxsIHBsdXJhbGl6ZSBhcHByb3ByaWF0ZWx5IChlLmcuICgnc3RvcnknLCAxKSAtPiAnc3RvcnknLCAoJ3N0b3J5JywgMikgLT4gJ3N0b3JpZXMnKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYWtlUGx1cmFsU3RyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHByaXZhdGUgaXJyZWd1bGFyTWFwOiBhbnkgPSB7XHJcbiAgICBhZGRlbmR1bTogJ2FkZGVuZGEnLFxyXG4gICAgYWxnYTogJ2FsZ2FlJyxcclxuICAgIGFsdW1uYTogJ2FsdW1uYWUnLFxyXG4gICAgYWx1bW51czogJ2FsdW1uaScsXHJcbiAgICBhbmFseXNpczogJ2FuYWx5c2VzJyxcclxuICAgIGFudGVubmE6ICdhbnRlbm5hZScsXHJcbiAgICBhcHBlbmRpeDogJ2FwcGVuZGljZXMnLFxyXG4gICAgYXF1YXJpdW06ICdhcXVhcmlhJyxcclxuICAgIGFyY2g6ICdhcmNoZXMnLFxyXG4gICAgYXhlOiAnYXhlcycsXHJcbiAgICBheGlzOiAnYXhlcycsXHJcbiAgICBiYWNpbGx1czogJ2JhY2lsbGknLFxyXG4gICAgYmFjdGVyaXVtOiAnYmFjdGVyaWEnLFxyXG4gICAgYmFzaXM6ICdiYXNlcycsXHJcbiAgICBiYXRjaDogJ2JhdGNoZXMnLFxyXG4gICAgYmVhY2g6ICdiZWFjaGVzJyxcclxuICAgIGJlYXU6ICdiZWF1eCcsXHJcbiAgICBiaXNvbjogJ2Jpc29uJyxcclxuICAgIGJydXNoOiAnYnJ1c2hlcycsXHJcbiAgICBidWZmYWxvOiAnYnVmZmFsb2VzJyxcclxuICAgIGJ1cmVhdTogJ2J1cmVhdXMnLFxyXG4gICAgYnVzOiAnYnVzc2VzJyxcclxuICAgIGNhY3R1czogJ2NhY3RpJyxcclxuICAgIGNhbGY6ICdjYWx2ZXMnLFxyXG4gICAgY2hhdGVhdTogJ2NoYXRlYXV4JyxcclxuICAgIGNoZXJyeTogJ2NoZXJyaWVzJyxcclxuICAgIGNoaWxkOiAnY2hpbGRyZW4nLFxyXG4gICAgY2h1cmNoOiAnY2h1cmNoZXMnLFxyXG4gICAgY2lyY3VzOiAnY2lyY3VzZXMnLFxyXG4gICAgY29kOiAnY29kJyxcclxuICAgIGNvcnBzOiAnY29ycHMnLFxyXG4gICAgY29ycHVzOiAnY29ycG9yYScsXHJcbiAgICBjcmlzaXM6ICdjcmlzZXMnLFxyXG4gICAgY3JpdGVyaW9uOiAnY3JpdGVyaWEnLFxyXG4gICAgY3VycmljdWx1bTogJ2N1cnJpY3VsYScsXHJcbiAgICBkYXR1bTogJ2RhdGEnLFxyXG4gICAgZGVlcjogJ2RlZXInLFxyXG4gICAgZGlhZ25vc2lzOiAnZGlhZ25vc2VzJyxcclxuICAgIGRpZTogJ2RpY2UnLFxyXG4gICAgZG9taW5vOiAnZG9taW5vZXMnLFxyXG4gICAgZHdhcmY6ICdkd2FydmVzJyxcclxuICAgIGVjaG86ICdlY2hvZXMnLFxyXG4gICAgZWxmOiAnZWx2ZXMnLFxyXG4gICAgZWxsaXBzaXM6ICdlbGxpcHNlcycsXHJcbiAgICBlbWJhcmdvOiAnZW1iYXJnb2VzJyxcclxuICAgIGVtcGhhc2lzOiAnZW1waGFzZXMnLFxyXG4gICAgZXJyYXR1bTogJ2VycmF0YScsXHJcbiAgICBmYXg6ICdmYXhlcycsXHJcbiAgICBmaXJlbWFuOiAnZmlyZW1lbicsXHJcbiAgICBmaXNoOiAnZmlzaCcsXHJcbiAgICBmbHVzaDogJ2ZsdXNoZXMnLFxyXG4gICAgZm9jdXM6ICdmb2NpJyxcclxuICAgIGZvb3Q6ICdmZWV0JyxcclxuICAgIGZvcm11bGE6ICdmb3JtdWxhcycsXHJcbiAgICBmdW5ndXM6ICdmdW5naScsXHJcbiAgICBnZW51czogJ2dlbmVyYScsXHJcbiAgICBnb29zZTogJ2dlZXNlJyxcclxuICAgIGdyYWZpdG86ICdncmFmaXRpJyxcclxuICAgIGhhbGY6ICdoYWx2ZXMnLFxyXG4gICAgaGVybzogJ2hlcm9lcycsXHJcbiAgICBob2F4OiAnaG9heGVzJyxcclxuICAgIGhvb2Y6ICdob292ZXMnLFxyXG4gICAgaHlwb3RoZXNpczogJ2h5cG90aGVzZXMnLFxyXG4gICAgaW5kZXg6ICdpbmRpY2VzJyxcclxuICAgIGtpc3M6ICdraXNzZXMnLFxyXG4gICAga25pZmU6ICdrbml2ZXMnLFxyXG4gICAgbGVhZjogJ2xlYXZlcycsXHJcbiAgICBsaWZlOiAnbGl2ZXMnLFxyXG4gICAgbG9hZjogJ2xvYXZlcycsXHJcbiAgICBsb3VzZTogJ2xpY2UnLFxyXG4gICAgbWFuOiAnbWVuJyxcclxuICAgIG1hbmdvOiAnbWFuZ29lcycsXHJcbiAgICBtYXRyaXg6ICdtYXRyaWNlcycsXHJcbiAgICBtZWFuczogJ21lYW5zJyxcclxuICAgIG1lZGl1bTogJ21lZGlhJyxcclxuICAgIG1lbW9yYW5kdW06ICdtZW1vcmFuZGEnLFxyXG4gICAgbWlsbGVubml1bTogJ21pbGVubmlhJyxcclxuICAgIG1vb3NlOiAnbW9vc2UnLFxyXG4gICAgbW9zcXVpdG86ICdtb3NxdWl0b2VzJyxcclxuICAgIG1vdHRvOiAnbW90dG9lcycsXHJcbiAgICBtb3VzZTogJ21pY2UnLFxyXG4gICAgbmVidWxhOiAnbmVidWxhZScsXHJcbiAgICBuZXVyb3NpczogJ25ldXJvc2VzJyxcclxuICAgIG51Y2xldXM6ICdudWNsZWknLFxyXG4gICAgb2FzaXM6ICdvYXNlcycsXHJcbiAgICBvY3RvcHVzOiAnb2N0b3BvZGVzJyxcclxuICAgIG92dW06ICdvdmEnLFxyXG4gICAgb3g6ICdveGVuJyxcclxuICAgIHBhcmFseXNpczogJ3BhcmFseXNlcycsXHJcbiAgICBwYXJlbnRoZXNpczogJ3BhcmVudGhlc2VzJyxcclxuICAgIHBlcnNvbjogJ3Blb3BsZScsXHJcbiAgICBwaGVub21lbm9uOiAncGhlbm9tZW5hJyxcclxuICAgIHBsYXRlYXU6ICdwbGF0ZWF1eCcsXHJcbiAgICBwb3RhdG86ICdwb3RhdG9lcycsXHJcbiAgICBxdWl6OiAncXVpenplcycsXHJcbiAgICByYWRpdXM6ICdyYWRpaScsXHJcbiAgICByZWZsZXg6ICdyZWZsZXhlcycsXHJcbiAgICAncnVubmVyLXVwJzogJ3J1bm5lcnMtdXAnLFxyXG4gICAgc2NhbXBvOiAnc2NhbXBpJyxcclxuICAgIHNjYXJmOiAnc2NhcnZlcycsXHJcbiAgICBzY2lzc29yczogJ3NjaXNzb3JzJyxcclxuICAgIHNjcmF0Y2g6ICdzY3JhdGNoZXMnLFxyXG4gICAgc2VsZjogJ3NlbHZlcycsXHJcbiAgICBzZXJpZXM6ICdzZXJpZXMnLFxyXG4gICAgc2hlYWY6ICdzaGVhdmVzJyxcclxuICAgIHNoZWVwOiAnc2hlZXAnLFxyXG4gICAgc2hlbGY6ICdzaGVsdmVzJyxcclxuICAgICdzb24taW4tbGF3JzogJ3NvbnMtaW4tbGF3JyxcclxuICAgIHNwZWNpZXM6ICdzcGVjaWVzJyxcclxuICAgIHNwbGFzaDogJ3NwbGFzaGVzJyxcclxuICAgIHN0aW11bHVzOiAnc3RpbXVsaScsXHJcbiAgICBzdGl0Y2g6ICdzdGl0Y2hlcycsXHJcbiAgICBzdHJhdHVtOiAnc3RyYXRhJyxcclxuICAgIHN5bGxhYnVzOiAnc3lsbGFiaScsXHJcbiAgICBzeW1wb3NpdW06ICdzeW1wb3NpYScsXHJcbiAgICBzeW5vcHNpczogJ3N5bm9wc2VzJyxcclxuICAgIHN5bnRoZXNpczogJ3N5bnRoZXNlcycsXHJcbiAgICB0YWJsZWF1OiAndGFibGVhdXgnLFxyXG4gICAgdGF4OiAndGF4ZXMnLFxyXG4gICAgdGhhdDogJ3Rob3NlJyxcclxuICAgIHRoZXNpczogJ3RoZXNlcycsXHJcbiAgICB0aGllZjogJ3RoaWV2ZXMnLFxyXG4gICAgdGhpczogJ3RoZXNlJyxcclxuICAgIHRvbWF0bzogJ3RvbWF0b2VzJyxcclxuICAgIHRvb3RoOiAndGVldGgnLFxyXG4gICAgdG9ybmFkbzogJ3Rvcm5hZG9lcycsXHJcbiAgICB0b3JwZWRvOiAndG9ycGVkb2VzJyxcclxuICAgIHZlcnRlYnJhOiAndmVydGVicmFlJyxcclxuICAgIHZldG86ICd2ZXRvZXMnLFxyXG4gICAgdml0YTogJ3ZpdGFlJyxcclxuICAgIHZvbGNhbm86ICd2b2xjYW5vZXMnLFxyXG4gICAgd2FsdHo6ICd3YWx0emVzJyxcclxuICAgIHdhc2g6ICd3YXNoZXMnLFxyXG4gICAgd2F0Y2g6ICd3YXRjaGVzJyxcclxuICAgIHdoYXJmOiAnd2hhcnZlcycsXHJcbiAgICB3aWZlOiAnd2l2ZXMnLFxyXG4gICAgd29sZjogJ3dvbHZlcycsXHJcbiAgICB3b21hbjogJ3dvbWVuJyxcclxuICAgIHplcm86ICd6ZXJvZXMnLFxyXG4gIH07XHJcblxyXG4gIHRyYW5zZm9ybShzaW5ndWxhckVudGl0eTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyID0gMCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXNpbmd1bGFyRW50aXR5IHx8IHNpbmd1bGFyRW50aXR5ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBzaW5ndWxhckVudGl0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gc2luZ3VsYXJFbnRpdHkudHJpbSgpLnNwbGl0KCcgJylbc2luZ3VsYXJFbnRpdHkudHJpbSgpLnNwbGl0KCcgJykubGVuZ3RoIC0gMV07XHJcbiAgICAgIGlmICh0aGlzLmlycmVndWxhck1hcFtsYXN0V29yZC50b0xvY2FsZUxvd2VyQ2FzZSgpXSkge1xyXG4gICAgICAgIGlmIChsYXN0V29yZFswXSA9PT0gbGFzdFdvcmRbMF0udG9Mb2NhbGVVcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNpbmd1bGFyRW50aXR5LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIGxhc3RXb3JkLFxyXG4gICAgICAgICAgICB0aGlzLmlycmVndWxhck1hcFtsYXN0V29yZC50b0xvY2FsZUxvd2VyQ2FzZSgpXS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIHRoaXMuaXJyZWd1bGFyTWFwW2xhc3RXb3JkLnRvTG9jYWxlTG93ZXJDYXNlKCldWzBdLFxyXG4gICAgICAgICAgICAgIHRoaXMuaXJyZWd1bGFyTWFwW2xhc3RXb3JkLnRvTG9jYWxlTG93ZXJDYXNlKCldWzBdLnRvTG9jYWxlVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaW5ndWxhckVudGl0eS5yZXBsYWNlKGxhc3RXb3JkLCB0aGlzLmlycmVndWxhck1hcFtsYXN0V29yZC50b0xvY2FsZUxvd2VyQ2FzZSgpXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdFdvcmRbbGFzdFdvcmQubGVuZ3RoIC0gMV0gPT09ICd5Jykge1xyXG4gICAgICAgIC8vIE5haXZlIGFwcHJvYWNoOlxyXG4gICAgICAgIC8vIGNvbnNvbmFudCt5ID0gd29yZCAtICd5JyArJ2llcydcclxuICAgICAgICAvLyB2b3dlbCt5ID0gd29yZCArICdzJ1xyXG5cclxuICAgICAgICByZXR1cm4gaXNWb3dlbChsYXN0V29yZFtsYXN0V29yZC5sZW5ndGggLSAyXSlcclxuICAgICAgICAgID8gc2luZ3VsYXJFbnRpdHkgKyAncydcclxuICAgICAgICAgIDogc2luZ3VsYXJFbnRpdHkucmVwbGFjZShsYXN0V29yZCwgbGFzdFdvcmQuc2xpY2UoMCwgLTEpICsgJ2llcycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhc3RXb3JkW2xhc3RXb3JkLmxlbmd0aCAtIDFdID09PSAncycpIHtcclxuICAgICAgICByZXR1cm4gc2luZ3VsYXJFbnRpdHkgKyAnZXMnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzaW5ndWxhckVudGl0eSArICdzJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=