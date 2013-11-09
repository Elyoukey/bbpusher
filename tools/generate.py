#!/usr/bin/python
# -*- coding: UTF-8 -*-

import urllib, urllib2, time, os, glob, cgi
import os, os.path
from sys import argv,exit,stdout
import re

def recursive( sourceFolder ):
    for name in os.listdir(sourceFolder):
        source = sourceFolder+'/'+name

        if os.path.isfile( source ):
            if  (source.endswith( '.gif' )) or (source.endswith( '.jpeg' )) or (source.endswith( '.png' )):
                print '<div class="player"><img src="'
		print source
		print '" /></div>'

            else:
                print source                # That's a file. Do something with it.

        elif os.path.isdir( source ):
                print '<div class="vestiaire">'
		print name
                recursive( source )
		print '</div>'


if __name__ == '__main__':
    if len(argv)<=1:
        print argv[0], 'sourceFolder'
    else:
        recursive(argv[1])
