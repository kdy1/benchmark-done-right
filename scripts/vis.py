#!/usr/bin/env python3

import matplotlib.pyplot as plt
import json
import os


def process(f):
    [op, test_type, target] = f.split('-')
    target = target.replace('.json', '')
    with open('.data/%s' % f, 'r') as f:
        data = json.load(f)
    keys = list(data.keys())
    keys_without_target = list(map(lambda s: s.split('(')[0].strip(), keys))
    values = list(data.values())
    plt.bar(keys_without_target, values)
    plt.title('%s (%s)' % (op, test_type))
    plt.xlabel('Toolchain')
    plt.ylabel('Op/s (Higher is better)')
    os.makedirs('images/%s/%s' % (op, test_type), exist_ok=True)
    plt.savefig('images/%s/%s/%s.png' % (op, test_type, target))
    plt.close()


files = os.listdir('.data')
for f in files:
    print('Data file:', f)
    process(f)
