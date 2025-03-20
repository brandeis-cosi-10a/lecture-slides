import json
with open('skills2.json') as f:
    skills = json.load(f)
    psets = {}
    caps = {}

    for skillname in skills:
        caps[skillname] = {'cap': skills[skillname]['cap'], 'count': len(skills[skillname]['problems'])}

        for problem in skills[skillname]['problems']:
            ps = skills[skillname]['problems'][problem]['ps']
            if ps not in psets:
                psets[ps] = {}
            if problem not in psets[ps]:
                psets[ps][problem] = {}

            psets[ps][problem][skillname] = False

with open('skills3.json', 'w') as f:
    json.dump({"problems": psets, "skills": caps}, f, indent=2)
    print('done')