const API_INDEX = [
    {
        "name": "ol/array",
        "description": "[MODULE]",
        "url": "module-ol_array",
        "members": [],
        "methods": [
            {
                "name": "stableSort",
                "type": 0,
                "description": "<p>Sort the passed array such that the relative order of equal elements is preserved.\nSee <a href=\"https://en.wikipedia.org/wiki/Sorting_algorithm#Stability\">https://en.wikipedia.org/wiki/Sorting_algorithm#Stability</a> for details.</p>",
                "url": "module-ol_array#.stableSort"
            }
        ],
        "events": []
    },
    {
        "name": "AssertionError",
        "description": "[CLASS]",
        "url": "module-ol_AssertionError-AssertionError",
        "members": [
            {
                "name": "code",
                "type": 0,
                "description": "<p>Error code. The meaning of the code can be found on\n<a href=\"https://openlayers.org/en/latest/doc/errors/\">https://openlayers.org/en/latest/doc/errors/</a> (replace <code>latest</code> with\nthe version found in the OpenLayers script's header comment if a version\nother than the latest is used).</p>",
                "url": "module-ol_AssertionError-AssertionError#code"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "Collection",
        "description": "[CLASS]",
        "url": "module-ol_Collection-Collection",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Collection-Collection#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all elements from the collection.</p>",
                "url": "module-ol_Collection-Collection#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Collection-Collection#dispatchEvent"
            },
            {
                "name": "extend",
                "type": 3,
                "description": "<p>Add elements to the collection.  This pushes each item in the provided array\nto the end of the collection.</p>",
                "url": "module-ol_Collection-Collection#extend"
            },
            {
                "name": "forEach",
                "type": 4,
                "description": "<p>Iterate over each element, calling the provided callback.</p>",
                "url": "module-ol_Collection-Collection#forEach"
            },
            {
                "name": "get",
                "type": 5,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_Collection-Collection#get"
            },
            {
                "name": "getArray",
                "type": 6,
                "description": "<p>Get a reference to the underlying Array object. Warning: if the array\nis mutated, no events will be dispatched by the collection, and the\ncollection's &quot;length&quot; property won't be in sync with the actual length\nof the array.</p>",
                "url": "module-ol_Collection-Collection#getArray"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_Collection-Collection#getKeys"
            },
            {
                "name": "getLength",
                "type": 8,
                "description": "<p>Get the length of this collection.</p>",
                "url": "module-ol_Collection-Collection#getLength"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_Collection-Collection#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Collection-Collection#getRevision"
            },
            {
                "name": "insertAt",
                "type": 11,
                "description": "<p>Insert an element at the provided index.</p>",
                "url": "module-ol_Collection-Collection#insertAt"
            },
            {
                "name": "item",
                "type": 12,
                "description": "<p>Get the element at the provided index.</p>",
                "url": "module-ol_Collection-Collection#item"
            },
            {
                "name": "on",
                "type": 13,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Collection-Collection#on"
            },
            {
                "name": "once",
                "type": 14,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Collection-Collection#once"
            },
            {
                "name": "pop",
                "type": 15,
                "description": "<p>Remove the last element of the collection and return it.\nReturn <code>undefined</code> if the collection is empty.</p>",
                "url": "module-ol_Collection-Collection#pop"
            },
            {
                "name": "push",
                "type": 16,
                "description": "<p>Insert the provided element at the end of the collection.</p>",
                "url": "module-ol_Collection-Collection#push"
            },
            {
                "name": "remove",
                "type": 17,
                "description": "<p>Remove the first occurrence of an element from the collection.</p>",
                "url": "module-ol_Collection-Collection#remove"
            },
            {
                "name": "removeAt",
                "type": 18,
                "description": "<p>Remove the element at the provided index and return it.\nReturn <code>undefined</code> if the collection does not contain this index.</p>",
                "url": "module-ol_Collection-Collection#removeAt"
            },
            {
                "name": "set",
                "type": 19,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_Collection-Collection#set"
            },
            {
                "name": "setAt",
                "type": 20,
                "description": "<p>Set the element at the provided index.</p>",
                "url": "module-ol_Collection-Collection#setAt"
            },
            {
                "name": "setProperties",
                "type": 21,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_Collection-Collection#setProperties"
            },
            {
                "name": "un",
                "type": 22,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Collection-Collection#un"
            },
            {
                "name": "unset",
                "type": 23,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_Collection-Collection#unset"
            }
        ],
        "events": []
    },
    {
        "name": "CollectionEvent",
        "description": "[CLASS]",
        "url": "module-ol_Collection#.CollectionEvent",
        "members": [
            {
                "name": "element",
                "type": 0,
                "description": "<p>The element that is added to or removed from the collection.</p>",
                "url": "module-ol_Collection#.CollectionEvent#element"
            },
            {
                "name": "index",
                "type": 1,
                "description": "<p>The index of the added or removed element.</p>",
                "url": "module-ol_Collection#.CollectionEvent#index"
            },
            {
                "name": "target",
                "type": 2,
                "description": "<p>The event target.</p>",
                "url": "module-ol_Collection#.CollectionEvent#target"
            },
            {
                "name": "type",
                "type": 3,
                "description": "<p>The event type.</p>",
                "url": "module-ol_Collection#.CollectionEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_Collection#.CollectionEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_Collection#.CollectionEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "add",
                "type": 0,
                "description": "<p>Triggered when an item is added to the collection.</p>",
                "url": "module-ol_Collection#.CollectionEvent#event:add"
            },
            {
                "name": "change",
                "type": 1,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_Collection#.CollectionEvent#event:change"
            },
            {
                "name": "error",
                "type": 2,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_Collection#.CollectionEvent#event:error"
            },
            {
                "name": "remove",
                "type": 3,
                "description": "<p>Triggered when an item is removed from the collection.</p>",
                "url": "module-ol_Collection#.CollectionEvent#event:remove"
            }
        ]
    },
    {
        "name": "ol/color",
        "description": "[MODULE]",
        "url": "module-ol_color",
        "members": [],
        "methods": [
            {
                "name": "asArray",
                "type": 0,
                "description": "<p>Return the color as an array. This function maintains a cache of calculated\narrays which means the result should not be modified.</p>",
                "url": "module-ol_color#.asArray"
            },
            {
                "name": "asString",
                "type": 1,
                "description": "<p>Return the color as an rgba string.</p>",
                "url": "module-ol_color#.asString"
            }
        ],
        "events": []
    },
    {
        "name": "ol/colorlike",
        "description": "[MODULE]",
        "url": "module-ol_colorlike",
        "members": [],
        "methods": [
            {
                "name": "asColorLike",
                "type": 0,
                "url": "module-ol_colorlike#.asColorLike"
            }
        ],
        "events": []
    },
    {
        "name": "ol/control",
        "description": "[MODULE]",
        "url": "module-ol_control",
        "members": [],
        "methods": [
            {
                "name": "defaults",
                "type": 0,
                "description": "<p>Set of controls included in maps by default. Unless configured otherwise,\nthis returns a collection containing an instance of each of the following\ncontrols:</p>\n<ul>\n<li>{@link module:ol/control/Zoom~Zoom}</li>\n<li>{@link module:ol/control/Rotate~Rotate}</li>\n<li>{@link module:ol/control/Attribution~Attribution}</li>\n</ul>",
                "url": "module-ol_control#.defaults"
            }
        ],
        "events": []
    },
    {
        "name": "Attribution",
        "description": "[CLASS]",
        "url": "module-ol_control_Attribution-Attribution",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_Attribution-Attribution#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_Attribution-Attribution#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_Attribution-Attribution#get"
            },
            {
                "name": "getCollapsed",
                "type": 3,
                "description": "<p>Return <code>true</code> when the attribution is currently collapsed or <code>false</code>\notherwise.</p>",
                "url": "module-ol_control_Attribution-Attribution#getCollapsed"
            },
            {
                "name": "getCollapsible",
                "type": 4,
                "description": "<p>Return <code>true</code> if the attribution is collapsible, <code>false</code> otherwise.</p>",
                "url": "module-ol_control_Attribution-Attribution#getCollapsible"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_Attribution-Attribution#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_Attribution-Attribution#getMap"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_Attribution-Attribution#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_Attribution-Attribution#getRevision"
            },
            {
                "name": "on",
                "type": 9,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_Attribution-Attribution#on"
            },
            {
                "name": "once",
                "type": 10,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_Attribution-Attribution#once"
            },
            {
                "name": "render",
                "type": 11,
                "description": "<p>Update the attribution element.</p>",
                "url": "module-ol_control_Attribution-Attribution#render"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_Attribution-Attribution#set"
            },
            {
                "name": "setCollapsed",
                "type": 13,
                "description": "<p>Collapse or expand the attribution according to the passed parameter. Will\nnot do anything if the attribution isn't collapsible or if the current\ncollapsed state is already the one requested.</p>",
                "url": "module-ol_control_Attribution-Attribution#setCollapsed"
            },
            {
                "name": "setCollapsible",
                "type": 14,
                "description": "<p>Set whether the attribution should be collapsible.</p>",
                "url": "module-ol_control_Attribution-Attribution#setCollapsible"
            },
            {
                "name": "setMap",
                "type": 15,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_Attribution-Attribution#setMap"
            },
            {
                "name": "setProperties",
                "type": 16,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_Attribution-Attribution#setProperties"
            },
            {
                "name": "setTarget",
                "type": 17,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_Attribution-Attribution#setTarget"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_Attribution-Attribution#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_Attribution-Attribution#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Control",
        "description": "[CLASS]",
        "url": "module-ol_control_Control-Control",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_Control-Control#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_Control-Control#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_Control-Control#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_Control-Control#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_Control-Control#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_Control-Control#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_Control-Control#getRevision"
            },
            {
                "name": "on",
                "type": 7,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_Control-Control#on"
            },
            {
                "name": "once",
                "type": 8,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_Control-Control#once"
            },
            {
                "name": "render",
                "type": 9,
                "description": "<p>Renders the control.</p>",
                "url": "module-ol_control_Control-Control#render"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_Control-Control#set"
            },
            {
                "name": "setMap",
                "type": 11,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_Control-Control#setMap"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_Control-Control#setProperties"
            },
            {
                "name": "setTarget",
                "type": 13,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_Control-Control#setTarget"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_Control-Control#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_Control-Control#unset"
            }
        ],
        "events": []
    },
    {
        "name": "FullScreen",
        "description": "[CLASS]",
        "url": "module-ol_control_FullScreen-FullScreen",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#getRevision"
            },
            {
                "name": "on",
                "type": 7,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#on"
            },
            {
                "name": "once",
                "type": 8,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#once"
            },
            {
                "name": "render",
                "type": 9,
                "description": "<p>Renders the control.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#render"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#set"
            },
            {
                "name": "setMap",
                "type": 11,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#setMap"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_FullScreen-FullScreen#setProperties"
            },
            {
                "name": "setTarget",
                "type": 13,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#setTarget"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_FullScreen-FullScreen#unset"
            }
        ],
        "events": []
    },
    {
        "name": "MousePosition",
        "description": "[CLASS]",
        "url": "module-ol_control_MousePosition-MousePosition",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#get"
            },
            {
                "name": "getCoordinateFormat",
                "type": 3,
                "description": "<p>Return the coordinate format type used to render the current position or\nundefined.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#getCoordinateFormat"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#getMap"
            },
            {
                "name": "getProjection",
                "type": 6,
                "description": "<p>Return the projection that is used to report the mouse position.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#getProjection"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#getRevision"
            },
            {
                "name": "on",
                "type": 9,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#on"
            },
            {
                "name": "once",
                "type": 10,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#once"
            },
            {
                "name": "render",
                "type": 11,
                "description": "<p>Update the projection. Rendering of the coordinates is done in\n<code>handleMouseMove</code> and <code>handleMouseUp</code>.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#render"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#set"
            },
            {
                "name": "setCoordinateFormat",
                "type": 13,
                "description": "<p>Set the coordinate format type used to render the current position.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#setCoordinateFormat"
            },
            {
                "name": "setMap",
                "type": 14,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#setMap"
            },
            {
                "name": "setProjection",
                "type": 15,
                "description": "<p>Set the projection that is used to report the mouse position.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#setProjection"
            },
            {
                "name": "setProperties",
                "type": 16,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_MousePosition-MousePosition#setProperties"
            },
            {
                "name": "setTarget",
                "type": 17,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#setTarget"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_MousePosition-MousePosition#unset"
            }
        ],
        "events": []
    },
    {
        "name": "OverviewMap",
        "description": "[CLASS]",
        "url": "module-ol_control_OverviewMap-OverviewMap",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#get"
            },
            {
                "name": "getCollapsed",
                "type": 3,
                "description": "<p>Determine if the overview map is collapsed.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getCollapsed"
            },
            {
                "name": "getCollapsible",
                "type": 4,
                "description": "<p>Return <code>true</code> if the overview map is collapsible, <code>false</code> otherwise.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getCollapsible"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getMap"
            },
            {
                "name": "getOverviewMap",
                "type": 7,
                "description": "<p>Return the overview map.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getOverviewMap"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getRevision"
            },
            {
                "name": "getRotateWithView",
                "type": 10,
                "description": "<p>Return <code>true</code> if the overview map view can rotate, <code>false</code> otherwise.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#getRotateWithView"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#once"
            },
            {
                "name": "render",
                "type": 13,
                "description": "<p>Update the overview map element.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#render"
            },
            {
                "name": "set",
                "type": 14,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#set"
            },
            {
                "name": "setCollapsed",
                "type": 15,
                "description": "<p>Collapse or expand the overview map according to the passed parameter. Will\nnot do anything if the overview map isn't collapsible or if the current\ncollapsed state is already the one requested.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#setCollapsed"
            },
            {
                "name": "setCollapsible",
                "type": 16,
                "description": "<p>Set whether the overview map should be collapsible.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#setCollapsible"
            },
            {
                "name": "setMap",
                "type": 17,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#setMap"
            },
            {
                "name": "setProperties",
                "type": 18,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#setProperties"
            },
            {
                "name": "setRotateWithView",
                "type": 19,
                "description": "<p>Set whether the overview map view should rotate with the main map view.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#setRotateWithView"
            },
            {
                "name": "setTarget",
                "type": 20,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#setTarget"
            },
            {
                "name": "un",
                "type": 21,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#un"
            },
            {
                "name": "unset",
                "type": 22,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_OverviewMap-OverviewMap#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Rotate",
        "description": "[CLASS]",
        "url": "module-ol_control_Rotate-Rotate",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_Rotate-Rotate#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_Rotate-Rotate#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_Rotate-Rotate#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_Rotate-Rotate#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_Rotate-Rotate#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_Rotate-Rotate#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_Rotate-Rotate#getRevision"
            },
            {
                "name": "on",
                "type": 7,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_Rotate-Rotate#on"
            },
            {
                "name": "once",
                "type": 8,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_Rotate-Rotate#once"
            },
            {
                "name": "render",
                "type": 9,
                "description": "<p>Update the rotate control element.</p>",
                "url": "module-ol_control_Rotate-Rotate#render"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_Rotate-Rotate#set"
            },
            {
                "name": "setMap",
                "type": 11,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_Rotate-Rotate#setMap"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_Rotate-Rotate#setProperties"
            },
            {
                "name": "setTarget",
                "type": 13,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_Rotate-Rotate#setTarget"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_Rotate-Rotate#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_Rotate-Rotate#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ScaleLine",
        "description": "[CLASS]",
        "url": "module-ol_control_ScaleLine-ScaleLine",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#getRevision"
            },
            {
                "name": "getUnits",
                "type": 7,
                "description": "<p>Return the units to use in the scale line.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#getUnits"
            },
            {
                "name": "on",
                "type": 8,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#on"
            },
            {
                "name": "once",
                "type": 9,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#once"
            },
            {
                "name": "render",
                "type": 10,
                "description": "<p>Update the scale line element.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#render"
            },
            {
                "name": "set",
                "type": 11,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#set"
            },
            {
                "name": "setDpi",
                "type": 12,
                "description": "<p>Specify the dpi of output device such as printer.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#setDpi"
            },
            {
                "name": "setMap",
                "type": 13,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#setMap"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#setProperties"
            },
            {
                "name": "setTarget",
                "type": 15,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#setTarget"
            },
            {
                "name": "setUnits",
                "type": 16,
                "description": "<p>Set the units to use in the scale line.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#setUnits"
            },
            {
                "name": "un",
                "type": 17,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#un"
            },
            {
                "name": "unset",
                "type": 18,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_ScaleLine-ScaleLine#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/control/ScaleLine",
        "description": "[MODULE]",
        "url": "module-ol_control_ScaleLine",
        "members": [
            {
                "name": "Units",
                "type": 0,
                "description": "<p>Units for the scale line. Supported values are <code>'degrees'</code>, <code>'imperial'</code>,\n<code>'nautical'</code>, <code>'metric'</code>, <code>'us'</code>.</p>",
                "url": "module-ol_control_ScaleLine#.Units"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "Zoom",
        "description": "[CLASS]",
        "url": "module-ol_control_Zoom-Zoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_Zoom-Zoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_Zoom-Zoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_Zoom-Zoom#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_Zoom-Zoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_Zoom-Zoom#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_Zoom-Zoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_Zoom-Zoom#getRevision"
            },
            {
                "name": "on",
                "type": 7,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_Zoom-Zoom#on"
            },
            {
                "name": "once",
                "type": 8,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_Zoom-Zoom#once"
            },
            {
                "name": "render",
                "type": 9,
                "description": "<p>Renders the control.</p>",
                "url": "module-ol_control_Zoom-Zoom#render"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_Zoom-Zoom#set"
            },
            {
                "name": "setMap",
                "type": 11,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_Zoom-Zoom#setMap"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_Zoom-Zoom#setProperties"
            },
            {
                "name": "setTarget",
                "type": 13,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_Zoom-Zoom#setTarget"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_Zoom-Zoom#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_Zoom-Zoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ZoomSlider",
        "description": "[CLASS]",
        "url": "module-ol_control_ZoomSlider-ZoomSlider",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#getRevision"
            },
            {
                "name": "on",
                "type": 7,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#on"
            },
            {
                "name": "once",
                "type": 8,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#once"
            },
            {
                "name": "render",
                "type": 9,
                "description": "<p>Update the zoomslider element.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#render"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#set"
            },
            {
                "name": "setMap",
                "type": 11,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#setMap"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#setProperties"
            },
            {
                "name": "setTarget",
                "type": 13,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#setTarget"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_ZoomSlider-ZoomSlider#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ZoomToExtent",
        "description": "[CLASS]",
        "url": "module-ol_control_ZoomToExtent-ZoomToExtent",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#getKeys"
            },
            {
                "name": "getMap",
                "type": 4,
                "description": "<p>Get the map associated with this control.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#getMap"
            },
            {
                "name": "getProperties",
                "type": 5,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#getProperties"
            },
            {
                "name": "getRevision",
                "type": 6,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#getRevision"
            },
            {
                "name": "on",
                "type": 7,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#on"
            },
            {
                "name": "once",
                "type": 8,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#once"
            },
            {
                "name": "render",
                "type": 9,
                "description": "<p>Renders the control.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#render"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#set"
            },
            {
                "name": "setMap",
                "type": 11,
                "description": "<p>Remove the control from its current map and attach it to the new map.\nPass <code>null</code> to just remove the control from the current map.\nSubclasses may set up event handlers to get notified about changes to\nthe map here.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#setMap"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#setProperties"
            },
            {
                "name": "setTarget",
                "type": 13,
                "description": "<p>This function is used to set a target element for the control. It has no\neffect if it is called after the control has been added to the map (i.e.\nafter <code>setMap</code> is called on the control). If no <code>target</code> is set in the\noptions passed to the control constructor and if <code>setTarget</code> is not called\nthen the control is added to the map's overlay container.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#setTarget"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_control_ZoomToExtent-ZoomToExtent#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/coordinate",
        "description": "[MODULE]",
        "url": "module-ol_coordinate",
        "members": [],
        "methods": [
            {
                "name": "add",
                "type": 0,
                "description": "<p>Add <code>delta</code> to <code>coordinate</code>. <code>coordinate</code> is modified in place and returned\nby the function.</p>\n<p>Example:</p>\n<pre class=\"prettyprint source\"><code>import {add} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nadd(coord, [-2, 4]);\n// coord is now [5.85, 51.983333]</code></pre>",
                "url": "module-ol_coordinate#.add"
            },
            {
                "name": "createStringXY",
                "type": 1,
                "description": "<p>Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be\nused to format\na {Coordinate} to a string.</p>\n<p>Example without specifying the fractional digits:</p>\n<pre class=\"prettyprint source\"><code>import {createStringXY} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar stringifyFunc = createStringXY();\nvar out = stringifyFunc(coord);\n// out is now '8, 48'</code></pre><p>Example with explicitly specifying 2 fractional digits:</p>\n<pre class=\"prettyprint source\"><code>import {createStringXY} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar stringifyFunc = createStringXY(2);\nvar out = stringifyFunc(coord);\n// out is now '7.85, 47.98'</code></pre>",
                "url": "module-ol_coordinate#.createStringXY"
            },
            {
                "name": "format",
                "type": 2,
                "description": "<p>Transforms the given {@link module:ol/coordinate~Coordinate} to a string\nusing the given string template. The strings <code>{x}</code> and <code>{y}</code> in the template\nwill be replaced with the first and second coordinate values respectively.</p>\n<p>Example without specifying the fractional digits:</p>\n<pre class=\"prettyprint source\"><code>import {format} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar template = 'Coordinate is ({x}|{y}).';\nvar out = format(coord, template);\n// out is now 'Coordinate is (8|48).'</code></pre><p>Example explicitly specifying the fractional digits:</p>\n<pre class=\"prettyprint source\"><code>import {format} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar template = 'Coordinate is ({x}|{y}).';\nvar out = format(coord, template, 2);\n// out is now 'Coordinate is (7.85|47.98).'</code></pre>",
                "url": "module-ol_coordinate#.format"
            },
            {
                "name": "rotate",
                "type": 3,
                "description": "<p>Rotate <code>coordinate</code> by <code>angle</code>. <code>coordinate</code> is modified in place and\nreturned by the function.</p>\n<p>Example:</p>\n<pre class=\"prettyprint source\"><code>import {rotate} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar rotateRadians = Math.PI / 2; // 90 degrees\nrotate(coord, rotateRadians);\n// coord is now [-47.983333, 7.85]</code></pre>",
                "url": "module-ol_coordinate#.rotate"
            },
            {
                "name": "toStringHDMS",
                "type": 4,
                "description": "<p>Format a geographic coordinate with the hemisphere, degrees, minutes, and\nseconds.</p>\n<p>Example without specifying fractional digits:</p>\n<pre class=\"prettyprint source\"><code>import {toStringHDMS} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar out = toStringHDMS(coord);\n// out is now '47° 58′ 60″ N 7° 50′ 60″ E'</code></pre><p>Example explicitly specifying 1 fractional digit:</p>\n<pre class=\"prettyprint source\"><code>import {toStringHDMS} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar out = toStringHDMS(coord, 1);\n// out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'</code></pre>",
                "url": "module-ol_coordinate#.toStringHDMS"
            },
            {
                "name": "toStringXY",
                "type": 5,
                "description": "<p>Format a coordinate as a comma delimited string.</p>\n<p>Example without specifying fractional digits:</p>\n<pre class=\"prettyprint source\"><code>import {toStringXY} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar out = toStringXY(coord);\n// out is now '8, 48'</code></pre><p>Example explicitly specifying 1 fractional digit:</p>\n<pre class=\"prettyprint source\"><code>import {toStringXY} from 'ol/coordinate';\n\nvar coord = [7.85, 47.983333];\nvar out = toStringXY(coord, 1);\n// out is now '7.8, 48.0'</code></pre>",
                "url": "module-ol_coordinate#.toStringXY"
            }
        ],
        "events": []
    },
    {
        "name": "DataTile",
        "description": "[CLASS]",
        "url": "module-ol_DataTile-DataTile",
        "members": [],
        "methods": [
            {
                "name": "dispatchEvent",
                "type": 0,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_DataTile-DataTile#dispatchEvent"
            },
            {
                "name": "getData",
                "type": 1,
                "description": "<p>Get the data for the tile.</p>",
                "url": "module-ol_DataTile-DataTile#getData"
            },
            {
                "name": "getError",
                "type": 2,
                "description": "<p>Get any loading error.</p>",
                "url": "module-ol_DataTile-DataTile#getError"
            },
            {
                "name": "getTileCoord",
                "type": 3,
                "description": "<p>Get the tile coordinate for this tile.</p>",
                "url": "module-ol_DataTile-DataTile#getTileCoord"
            },
            {
                "name": "load",
                "type": 4,
                "description": "<p>Load not yet loaded URI.</p>",
                "url": "module-ol_DataTile-DataTile#load"
            },
            {
                "name": "setState",
                "type": 5,
                "description": "<p>Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,\nit is important to set the state correctly to {@link module:ol/TileState~ERROR}\nwhen the tile cannot be loaded. Otherwise the tile cannot be removed from\nthe tile queue and will block other requests.</p>",
                "url": "module-ol_DataTile-DataTile#setState"
            }
        ],
        "events": []
    },
    {
        "name": "ol/DataTile",
        "description": "[MODULE]",
        "url": "module-ol_DataTile",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/easing",
        "description": "[MODULE]",
        "url": "module-ol_easing",
        "members": [],
        "methods": [
            {
                "name": "easeIn",
                "type": 0,
                "description": "<p>Start slow and speed up.</p>",
                "url": "module-ol_easing#.easeIn"
            },
            {
                "name": "easeOut",
                "type": 1,
                "description": "<p>Start fast and slow down.</p>",
                "url": "module-ol_easing#.easeOut"
            },
            {
                "name": "inAndOut",
                "type": 2,
                "description": "<p>Start slow, speed up, and then slow down again.</p>",
                "url": "module-ol_easing#.inAndOut"
            },
            {
                "name": "linear",
                "type": 3,
                "description": "<p>Maintain a constant speed over time.</p>",
                "url": "module-ol_easing#.linear"
            },
            {
                "name": "upAndDown",
                "type": 4,
                "description": "<p>Start slow, speed up, and at the very end slow down again.  This has the\nsame general behavior as {@link module:ol/easing.inAndOut}, but the final\nslowdown is delayed.</p>",
                "url": "module-ol_easing#.upAndDown"
            }
        ],
        "events": []
    },
    {
        "name": "ol/events",
        "description": "[MODULE]",
        "url": "module-ol_events",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/events/condition",
        "description": "[MODULE]",
        "url": "module-ol_events_condition",
        "members": [
            {
                "name": "altKeyOnly",
                "type": 0,
                "description": "<p>Return <code>true</code> if only the alt-key is pressed, <code>false</code> otherwise (e.g. when\nadditionally the shift-key is pressed).</p>",
                "url": "module-ol_events_condition#.altKeyOnly"
            },
            {
                "name": "altShiftKeysOnly",
                "type": 1,
                "description": "<p>Return <code>true</code> if only the alt-key and shift-key is pressed, <code>false</code> otherwise\n(e.g. when additionally the platform-modifier-key is pressed).</p>",
                "url": "module-ol_events_condition#.altShiftKeysOnly"
            },
            {
                "name": "always",
                "type": 2,
                "description": "<p>Return always true.</p>",
                "url": "module-ol_events_condition#.always"
            },
            {
                "name": "click",
                "type": 3,
                "description": "<p>Return <code>true</code> if the event is a <code>click</code> event, <code>false</code> otherwise.</p>",
                "url": "module-ol_events_condition#.click"
            },
            {
                "name": "doubleClick",
                "type": 4,
                "description": "<p>Return <code>true</code> if the event is a map <code>dblclick</code> event, <code>false</code> otherwise.</p>",
                "url": "module-ol_events_condition#.doubleClick"
            },
            {
                "name": "focus",
                "type": 5,
                "description": "<p>Return <code>true</code> if the map has the focus. This condition requires a map target\nelement with a <code>tabindex</code> attribute, e.g. <code>&lt;div id=&quot;map&quot; tabindex=&quot;1&quot;&gt;</code>.</p>",
                "url": "module-ol_events_condition#.focus"
            },
            {
                "name": "mouseOnly",
                "type": 6,
                "description": "<p>Return <code>true</code> if the event originates from a mouse device.</p>",
                "url": "module-ol_events_condition#.mouseOnly"
            },
            {
                "name": "never",
                "type": 7,
                "description": "<p>Return always false.</p>",
                "url": "module-ol_events_condition#.never"
            },
            {
                "name": "noModifierKeys",
                "type": 8,
                "description": "<p>Return <code>true</code> if no modifier key (alt-, shift- or platform-modifier-key) is\npressed.</p>",
                "url": "module-ol_events_condition#.noModifierKeys"
            },
            {
                "name": "penOnly",
                "type": 9,
                "description": "<p>Return <code>true</code> if the event originates from a digital pen.</p>",
                "url": "module-ol_events_condition#.penOnly"
            },
            {
                "name": "platformModifierKeyOnly",
                "type": 10,
                "description": "<p>Return <code>true</code> if only the platform-modifier-key (the meta-key on Mac,\nctrl-key otherwise) is pressed, <code>false</code> otherwise (e.g. when additionally\nthe shift-key is pressed).</p>",
                "url": "module-ol_events_condition#.platformModifierKeyOnly"
            },
            {
                "name": "pointerMove",
                "type": 11,
                "description": "<p>Return <code>true</code> if the browser event is a <code>pointermove</code> event, <code>false</code>\notherwise.</p>",
                "url": "module-ol_events_condition#.pointerMove"
            },
            {
                "name": "primaryAction",
                "type": 12,
                "description": "<p>Return <code>true</code> if the event originates from a primary pointer in\ncontact with the surface or if the left mouse button is pressed.\nSee <a href=\"https://www.w3.org/TR/pointerevents/#button-states\">https://www.w3.org/TR/pointerevents/#button-states</a>.</p>",
                "url": "module-ol_events_condition#.primaryAction"
            },
            {
                "name": "shiftKeyOnly",
                "type": 13,
                "description": "<p>Return <code>true</code> if only the shift-key is pressed, <code>false</code> otherwise (e.g. when\nadditionally the alt-key is pressed).</p>",
                "url": "module-ol_events_condition#.shiftKeyOnly"
            },
            {
                "name": "singleClick",
                "type": 14,
                "description": "<p>Return <code>true</code> if the event is a map <code>singleclick</code> event, <code>false</code> otherwise.</p>",
                "url": "module-ol_events_condition#.singleClick"
            },
            {
                "name": "targetNotEditable",
                "type": 15,
                "description": "<p>Return <code>true</code> if the target element is not editable, i.e. not a <code>&lt;input&gt;</code>-,\n<code>&lt;select&gt;</code>- or <code>&lt;textarea&gt;</code>-element, <code>false</code> otherwise.</p>",
                "url": "module-ol_events_condition#.targetNotEditable"
            },
            {
                "name": "touchOnly",
                "type": 16,
                "description": "<p>Return <code>true</code> if the event originates from a touchable device.</p>",
                "url": "module-ol_events_condition#.touchOnly"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "BaseEvent",
        "description": "[CLASS]",
        "url": "module-ol_events_Event-BaseEvent",
        "members": [
            {
                "name": "target",
                "type": 0,
                "description": "<p>The event target.</p>",
                "url": "module-ol_events_Event-BaseEvent#target"
            },
            {
                "name": "type",
                "type": 1,
                "description": "<p>The event type.</p>",
                "url": "module-ol_events_Event-BaseEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_events_Event-BaseEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_events_Event-BaseEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_events_Event-BaseEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_events_Event-BaseEvent#event:error"
            }
        ]
    },
    {
        "name": "Target",
        "description": "[CLASS]",
        "url": "module-ol_events_Target-Target",
        "members": [],
        "methods": [
            {
                "name": "dispatchEvent",
                "type": 0,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_events_Target-Target#dispatchEvent"
            }
        ],
        "events": []
    },
    {
        "name": "ol/extent",
        "description": "[MODULE]",
        "url": "module-ol_extent",
        "members": [],
        "methods": [
            {
                "name": "applyTransform",
                "type": 0,
                "description": "<p>Apply a transform function to the extent.</p>",
                "url": "module-ol_extent#.applyTransform"
            },
            {
                "name": "boundingExtent",
                "type": 1,
                "description": "<p>Build an extent that includes all given coordinates.</p>",
                "url": "module-ol_extent#.boundingExtent"
            },
            {
                "name": "buffer",
                "type": 2,
                "description": "<p>Return extent increased by the provided value.</p>",
                "url": "module-ol_extent#.buffer"
            },
            {
                "name": "containsCoordinate",
                "type": 3,
                "description": "<p>Check if the passed coordinate is contained or on the edge of the extent.</p>",
                "url": "module-ol_extent#.containsCoordinate"
            },
            {
                "name": "containsExtent",
                "type": 4,
                "description": "<p>Check if one extent contains another.</p>\n<p>An extent is deemed contained if it lies completely within the other extent,\nincluding if they share one or more edges.</p>",
                "url": "module-ol_extent#.containsExtent"
            },
            {
                "name": "containsXY",
                "type": 5,
                "description": "<p>Check if the passed coordinate is contained or on the edge of the extent.</p>",
                "url": "module-ol_extent#.containsXY"
            },
            {
                "name": "createEmpty",
                "type": 6,
                "description": "<p>Create an empty extent.</p>",
                "url": "module-ol_extent#.createEmpty"
            },
            {
                "name": "equals",
                "type": 7,
                "description": "<p>Determine if two extents are equivalent.</p>",
                "url": "module-ol_extent#.equals"
            },
            {
                "name": "extend",
                "type": 8,
                "description": "<p>Modify an extent to include another extent.</p>",
                "url": "module-ol_extent#.extend"
            },
            {
                "name": "getArea",
                "type": 9,
                "description": "<p>Get the size of an extent.</p>",
                "url": "module-ol_extent#.getArea"
            },
            {
                "name": "getBottomLeft",
                "type": 10,
                "description": "<p>Get the bottom left coordinate of an extent.</p>",
                "url": "module-ol_extent#.getBottomLeft"
            },
            {
                "name": "getBottomRight",
                "type": 11,
                "description": "<p>Get the bottom right coordinate of an extent.</p>",
                "url": "module-ol_extent#.getBottomRight"
            },
            {
                "name": "getCenter",
                "type": 12,
                "description": "<p>Get the center coordinate of an extent.</p>",
                "url": "module-ol_extent#.getCenter"
            },
            {
                "name": "getHeight",
                "type": 13,
                "description": "<p>Get the height of an extent.</p>",
                "url": "module-ol_extent#.getHeight"
            },
            {
                "name": "getIntersection",
                "type": 14,
                "description": "<p>Get the intersection of two extents.</p>",
                "url": "module-ol_extent#.getIntersection"
            },
            {
                "name": "getSize",
                "type": 15,
                "description": "<p>Get the size (width, height) of an extent.</p>",
                "url": "module-ol_extent#.getSize"
            },
            {
                "name": "getTopLeft",
                "type": 16,
                "description": "<p>Get the top left coordinate of an extent.</p>",
                "url": "module-ol_extent#.getTopLeft"
            },
            {
                "name": "getTopRight",
                "type": 17,
                "description": "<p>Get the top right coordinate of an extent.</p>",
                "url": "module-ol_extent#.getTopRight"
            },
            {
                "name": "getWidth",
                "type": 18,
                "description": "<p>Get the width of an extent.</p>",
                "url": "module-ol_extent#.getWidth"
            },
            {
                "name": "intersects",
                "type": 19,
                "description": "<p>Determine if one extent intersects another.</p>",
                "url": "module-ol_extent#.intersects"
            },
            {
                "name": "isEmpty",
                "type": 20,
                "description": "<p>Determine if an extent is empty.</p>",
                "url": "module-ol_extent#.isEmpty"
            }
        ],
        "events": []
    },
    {
        "name": "Feature",
        "description": "[CLASS]",
        "url": "module-ol_Feature-Feature",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Feature-Feature#changed"
            },
            {
                "name": "clone",
                "type": 1,
                "description": "<p>Clone this feature. If the original feature has a geometry it\nis also cloned. The feature id is not set in the clone.</p>",
                "url": "module-ol_Feature-Feature#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Feature-Feature#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_Feature-Feature#get"
            },
            {
                "name": "getGeometry",
                "type": 4,
                "description": "<p>Get the feature's default geometry.  A feature may have any number of named\ngeometries.  The &quot;default&quot; geometry (the one that is rendered by default) is\nset when calling {@link module:ol/Feature~Feature#setGeometry}.</p>",
                "url": "module-ol_Feature-Feature#getGeometry"
            },
            {
                "name": "getGeometryName",
                "type": 5,
                "description": "<p>Get the name of the feature's default geometry.  By default, the default\ngeometry is named <code>geometry</code>.</p>",
                "url": "module-ol_Feature-Feature#getGeometryName"
            },
            {
                "name": "getId",
                "type": 6,
                "description": "<p>Get the feature identifier.  This is a stable identifier for the feature and\nis either set when reading data from a remote source or set explicitly by\ncalling {@link module:ol/Feature~Feature#setId}.</p>",
                "url": "module-ol_Feature-Feature#getId"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_Feature-Feature#getKeys"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_Feature-Feature#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Feature-Feature#getRevision"
            },
            {
                "name": "getStyle",
                "type": 10,
                "description": "<p>Get the feature's style. Will return what was provided to the\n{@link module:ol/Feature~Feature#setStyle} method.</p>",
                "url": "module-ol_Feature-Feature#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 11,
                "description": "<p>Get the feature's style function.</p>",
                "url": "module-ol_Feature-Feature#getStyleFunction"
            },
            {
                "name": "on",
                "type": 12,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Feature-Feature#on"
            },
            {
                "name": "once",
                "type": 13,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Feature-Feature#once"
            },
            {
                "name": "set",
                "type": 14,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_Feature-Feature#set"
            },
            {
                "name": "setGeometry",
                "type": 15,
                "description": "<p>Set the default geometry for the feature.  This will update the property\nwith the name returned by {@link module:ol/Feature~Feature#getGeometryName}.</p>",
                "url": "module-ol_Feature-Feature#setGeometry"
            },
            {
                "name": "setGeometryName",
                "type": 16,
                "description": "<p>Set the property name to be used when getting the feature's default geometry.\nWhen calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with\nthis name will be returned.</p>",
                "url": "module-ol_Feature-Feature#setGeometryName"
            },
            {
                "name": "setId",
                "type": 17,
                "description": "<p>Set the feature id.  The feature id is considered stable and may be used when\nrequesting features or comparing identifiers returned from a remote source.\nThe feature id can be used with the\n{@link module:ol/source/Vector~VectorSource#getFeatureById} method.</p>",
                "url": "module-ol_Feature-Feature#setId"
            },
            {
                "name": "setProperties",
                "type": 18,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_Feature-Feature#setProperties"
            },
            {
                "name": "setStyle",
                "type": 19,
                "description": "<p>Set the style for the feature to override the layer style.  This can be a\nsingle style object, an array of styles, or a function that takes a\nresolution and returns an array of styles. To unset the feature style, call\n<code>setStyle()</code> without arguments or a falsey value.</p>",
                "url": "module-ol_Feature-Feature#setStyle"
            },
            {
                "name": "un",
                "type": 20,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Feature-Feature#un"
            },
            {
                "name": "unset",
                "type": 21,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_Feature-Feature#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/Feature",
        "description": "[MODULE]",
        "url": "module-ol_Feature",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/featureloader",
        "description": "[MODULE]",
        "url": "module-ol_featureloader",
        "members": [],
        "methods": [
            {
                "name": "setWithCredentials",
                "type": 0,
                "description": "<p>Setter for the withCredentials configuration for the XHR.</p>",
                "url": "module-ol_featureloader#.setWithCredentials"
            },
            {
                "name": "xhr",
                "type": 1,
                "description": "<p>Create an XHR feature loader for a <code>url</code> and <code>format</code>. The feature loader\nloads features (with XHR), parses the features, and adds them to the\nvector source.</p>",
                "url": "module-ol_featureloader#.xhr"
            }
        ],
        "events": []
    },
    {
        "name": "EsriJSON",
        "description": "[CLASS]",
        "url": "module-ol_format_EsriJSON-EsriJSON",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a feature.  Only works for a single feature. Use <code>readFeatures</code> to\nread a feature collection.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features.  Works with both a single feature and a feature\ncollection.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read a geometry.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as string.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#writeFeature"
            },
            {
                "name": "writeFeatureObject",
                "type": 5,
                "description": "<p>Encode a feature as a esriJSON Feature object.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#writeFeatureObject"
            },
            {
                "name": "writeFeatures",
                "type": 6,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#writeFeatures"
            },
            {
                "name": "writeFeaturesObject",
                "type": 7,
                "description": "<p>Encode an array of features as a EsriJSON object.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#writeFeaturesObject"
            },
            {
                "name": "writeGeometry",
                "type": 8,
                "description": "<p>Encode a geometry as string.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#writeGeometry"
            },
            {
                "name": "writeGeometryObject",
                "type": 9,
                "description": "<p>Encode a geometry as a EsriJSON object.</p>",
                "url": "module-ol_format_EsriJSON-EsriJSON#writeGeometryObject"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/EsriJSON",
        "description": "[MODULE]",
        "url": "module-ol_format_EsriJSON",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "FeatureFormat",
        "description": "[CLASS]",
        "url": "module-ol_format_Feature-FeatureFormat",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/format/Feature",
        "description": "[MODULE]",
        "url": "module-ol_format_Feature",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/format/filter",
        "description": "[MODULE]",
        "url": "module-ol_format_filter",
        "members": [],
        "methods": [
            {
                "name": "and",
                "type": 0,
                "description": "<p>Create a logical <code>&lt;And&gt;</code> operator between two or more filter conditions.</p>",
                "url": "module-ol_format_filter#.and"
            },
            {
                "name": "bbox",
                "type": 1,
                "description": "<p>Create a <code>&lt;BBOX&gt;</code> operator to test whether a geometry-valued property\nintersects a fixed bounding box</p>",
                "url": "module-ol_format_filter#.bbox"
            },
            {
                "name": "between",
                "type": 2,
                "description": "<p>Creates a <code>&lt;PropertyIsBetween&gt;</code> comparison operator to test whether an expression\nvalue lies within a range given by a lower and upper bound (inclusive).</p>",
                "url": "module-ol_format_filter#.between"
            },
            {
                "name": "contains",
                "type": 3,
                "description": "<p>Create a <code>&lt;Contains&gt;</code> operator to test whether a geometry-valued property\ncontains a given geometry.</p>",
                "url": "module-ol_format_filter#.contains"
            },
            {
                "name": "disjoint",
                "type": 4,
                "description": "<p>Create a <code>&lt;Disjoint&gt;</code> operator to test whether a geometry-valued property\nis disjoint to a given geometry.</p>",
                "url": "module-ol_format_filter#.disjoint"
            },
            {
                "name": "during",
                "type": 5,
                "description": "<p>Create a <code>&lt;During&gt;</code> temporal operator.</p>",
                "url": "module-ol_format_filter#.during"
            },
            {
                "name": "dwithin",
                "type": 6,
                "description": "<p>Create a <code>&lt;DWithin&gt;</code> operator to test whether a geometry-valued property\nis within a distance to a given geometry.</p>",
                "url": "module-ol_format_filter#.dwithin"
            },
            {
                "name": "equalTo",
                "type": 7,
                "description": "<p>Creates a <code>&lt;PropertyIsEqualTo&gt;</code> comparison operator.</p>",
                "url": "module-ol_format_filter#.equalTo"
            },
            {
                "name": "greaterThan",
                "type": 8,
                "description": "<p>Creates a <code>&lt;PropertyIsGreaterThan&gt;</code> comparison operator.</p>",
                "url": "module-ol_format_filter#.greaterThan"
            },
            {
                "name": "greaterThanOrEqualTo",
                "type": 9,
                "description": "<p>Creates a <code>&lt;PropertyIsGreaterThanOrEqualTo&gt;</code> comparison operator.</p>",
                "url": "module-ol_format_filter#.greaterThanOrEqualTo"
            },
            {
                "name": "intersects",
                "type": 10,
                "description": "<p>Create a <code>&lt;Intersects&gt;</code> operator to test whether a geometry-valued property\nintersects a given geometry.</p>",
                "url": "module-ol_format_filter#.intersects"
            },
            {
                "name": "isNull",
                "type": 11,
                "description": "<p>Creates a <code>&lt;PropertyIsNull&gt;</code> comparison operator to test whether a property value\nis null.</p>",
                "url": "module-ol_format_filter#.isNull"
            },
            {
                "name": "lessThan",
                "type": 12,
                "description": "<p>Creates a <code>&lt;PropertyIsLessThan&gt;</code> comparison operator.</p>",
                "url": "module-ol_format_filter#.lessThan"
            },
            {
                "name": "lessThanOrEqualTo",
                "type": 13,
                "description": "<p>Creates a <code>&lt;PropertyIsLessThanOrEqualTo&gt;</code> comparison operator.</p>",
                "url": "module-ol_format_filter#.lessThanOrEqualTo"
            },
            {
                "name": "like",
                "type": 14,
                "description": "<p>Represents a <code>&lt;PropertyIsLike&gt;</code> comparison operator that matches a string property\nvalue against a text pattern.</p>",
                "url": "module-ol_format_filter#.like"
            },
            {
                "name": "not",
                "type": 15,
                "description": "<p>Represents a logical <code>&lt;Not&gt;</code> operator for a filter condition.</p>",
                "url": "module-ol_format_filter#.not"
            },
            {
                "name": "notEqualTo",
                "type": 16,
                "description": "<p>Creates a <code>&lt;PropertyIsNotEqualTo&gt;</code> comparison operator.</p>",
                "url": "module-ol_format_filter#.notEqualTo"
            },
            {
                "name": "or",
                "type": 17,
                "description": "<p>Create a logical <code>&lt;Or&gt;</code> operator between two or more filter conditions.</p>",
                "url": "module-ol_format_filter#.or"
            },
            {
                "name": "within",
                "type": 18,
                "description": "<p>Create a <code>&lt;Within&gt;</code> operator to test whether a geometry-valued property\nis within a given geometry.</p>",
                "url": "module-ol_format_filter#.within"
            }
        ],
        "events": []
    },
    {
        "name": "Bbox",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Bbox-Bbox",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Contains",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Contains-Contains",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Disjoint",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Disjoint-Disjoint",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "During",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_During-During",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "DWithin",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_DWithin-DWithin",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "EqualTo",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_EqualTo-EqualTo",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "GreaterThan",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_GreaterThan-GreaterThan",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "GreaterThanOrEqualTo",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_GreaterThanOrEqualTo-GreaterThanOrEqualTo",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Intersects",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Intersects-Intersects",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "IsBetween",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_IsBetween-IsBetween",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "IsLike",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_IsLike-IsLike",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "IsNull",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_IsNull-IsNull",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "LessThan",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_LessThan-LessThan",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "LessThanOrEqualTo",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_LessThanOrEqualTo-LessThanOrEqualTo",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Not",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Not-Not",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "NotEqualTo",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_NotEqualTo-NotEqualTo",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Or",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Or-Or",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Within",
        "description": "[CLASS]",
        "url": "module-ol_format_filter_Within-Within",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "GeoJSON",
        "description": "[CLASS]",
        "url": "module-ol_format_GeoJSON-GeoJSON",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a feature.  Only works for a single feature. Use <code>readFeatures</code> to\nread a feature collection.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features.  Works with both a single feature and a feature\ncollection.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read a geometry.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as string.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#writeFeature"
            },
            {
                "name": "writeFeatureObject",
                "type": 5,
                "description": "<p>Encode a feature as a GeoJSON Feature object.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#writeFeatureObject"
            },
            {
                "name": "writeFeatures",
                "type": 6,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#writeFeatures"
            },
            {
                "name": "writeFeaturesObject",
                "type": 7,
                "description": "<p>Encode an array of features as a GeoJSON object.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#writeFeaturesObject"
            },
            {
                "name": "writeGeometry",
                "type": 8,
                "description": "<p>Encode a geometry as string.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#writeGeometry"
            },
            {
                "name": "writeGeometryObject",
                "type": 9,
                "description": "<p>Encode a geometry as a GeoJSON object.</p>",
                "url": "module-ol_format_GeoJSON-GeoJSON#writeGeometryObject"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/GeoJSON",
        "description": "[MODULE]",
        "url": "module-ol_format_GeoJSON",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "GML",
        "description": "[CLASS]",
        "url": "module-ol_format_GML-GML",
        "members": [],
        "methods": [
            {
                "name": "writeFeatures",
                "type": 0,
                "description": "<p>Encode an array of features in GML 3.1.1 Simple Features.</p>",
                "url": "module-ol_format_GML-GML#writeFeatures"
            },
            {
                "name": "writeFeaturesNode",
                "type": 1,
                "description": "<p>Encode an array of features in the GML 3.1.1 format as an XML node.</p>",
                "url": "module-ol_format_GML-GML#writeFeaturesNode"
            }
        ],
        "events": []
    },
    {
        "name": "GML2",
        "description": "[CLASS]",
        "url": "module-ol_format_GML2-GML2",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_GML2-GML2#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_GML2-GML2#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_GML2-GML2#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_GML2-GML2#writeFeatures"
            }
        ],
        "events": []
    },
    {
        "name": "GML3",
        "description": "[CLASS]",
        "url": "module-ol_format_GML3-GML3",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_GML3-GML3#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_GML3-GML3#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_GML3-GML3#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features in GML 3.1.1 Simple Features.</p>",
                "url": "module-ol_format_GML3-GML3#writeFeatures"
            },
            {
                "name": "writeFeaturesNode",
                "type": 4,
                "description": "<p>Encode an array of features in the GML 3.1.1 format as an XML node.</p>",
                "url": "module-ol_format_GML3-GML3#writeFeaturesNode"
            },
            {
                "name": "writeGeometryNode",
                "type": 5,
                "description": "<p>Encode a geometry in GML 3.1.1 Simple Features.</p>",
                "url": "module-ol_format_GML3-GML3#writeGeometryNode"
            }
        ],
        "events": []
    },
    {
        "name": "GML32",
        "description": "[CLASS]",
        "url": "module-ol_format_GML32-GML32",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_GML32-GML32#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_GML32-GML32#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_GML32-GML32#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features in GML 3.1.1 Simple Features.</p>",
                "url": "module-ol_format_GML32-GML32#writeFeatures"
            },
            {
                "name": "writeFeaturesNode",
                "type": 4,
                "description": "<p>Encode an array of features in the GML 3.1.1 format as an XML node.</p>",
                "url": "module-ol_format_GML32-GML32#writeFeaturesNode"
            },
            {
                "name": "writeGeometryNode",
                "type": 5,
                "description": "<p>Encode a geometry in GML 3.1.1 Simple Features.</p>",
                "url": "module-ol_format_GML32-GML32#writeGeometryNode"
            }
        ],
        "events": []
    },
    {
        "name": "GMLBase",
        "description": "[CLASS]",
        "url": "module-ol_format_GMLBase-GMLBase",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_GMLBase-GMLBase#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_GMLBase-GMLBase#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_GMLBase-GMLBase#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_GMLBase-GMLBase#writeFeatures"
            }
        ],
        "events": []
    },
    {
        "name": "GPX",
        "description": "[CLASS]",
        "url": "module-ol_format_GPX-GPX",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_GPX-GPX#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_GPX-GPX#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_GPX-GPX#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_GPX-GPX#writeFeatures"
            },
            {
                "name": "writeFeaturesNode",
                "type": 4,
                "description": "<p>Encode an array of features in the GPX format as an XML node.\nLineString geometries are output as routes (<code>&lt;rte&gt;</code>), and MultiLineString\nas tracks (<code>&lt;trk&gt;</code>).</p>",
                "url": "module-ol_format_GPX-GPX#writeFeaturesNode"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/GPX",
        "description": "[MODULE]",
        "url": "module-ol_format_GPX",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "IGC",
        "description": "[CLASS]",
        "url": "module-ol_format_IGC-IGC",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read the feature from the source.</p>",
                "url": "module-ol_format_IGC-IGC#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read the features from the source.</p>",
                "url": "module-ol_format_IGC-IGC#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read the geometry from the source.</p>",
                "url": "module-ol_format_IGC-IGC#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_IGC-IGC#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as a string.</p>",
                "url": "module-ol_format_IGC-IGC#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_IGC-IGC#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Write a single geometry.</p>",
                "url": "module-ol_format_IGC-IGC#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "IIIFInfo",
        "description": "[CLASS]",
        "url": "module-ol_format_IIIFInfo-IIIFInfo",
        "members": [],
        "methods": [
            {
                "name": "getImageApiVersion",
                "type": 0,
                "url": "module-ol_format_IIIFInfo-IIIFInfo#getImageApiVersion"
            },
            {
                "name": "getTileSourceOptions",
                "type": 1,
                "url": "module-ol_format_IIIFInfo-IIIFInfo#getTileSourceOptions"
            },
            {
                "name": "setImageInfo",
                "type": 2,
                "url": "module-ol_format_IIIFInfo-IIIFInfo#setImageInfo"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/IIIFInfo",
        "description": "[MODULE]",
        "url": "module-ol_format_IIIFInfo",
        "members": [
            {
                "name": "Versions",
                "type": 0,
                "description": "<p>Enum representing the major IIIF Image API versions</p>",
                "url": "module-ol_format_IIIFInfo#.Versions"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "JSONFeature",
        "description": "[CLASS]",
        "url": "module-ol_format_JSONFeature-JSONFeature",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a feature.  Only works for a single feature. Use <code>readFeatures</code> to\nread a feature collection.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features.  Works with both a single feature and a feature\ncollection.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read a geometry.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as string.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Encode a geometry as string.</p>",
                "url": "module-ol_format_JSONFeature-JSONFeature#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "KML",
        "description": "[CLASS]",
        "url": "module-ol_format_KML-KML",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_KML-KML#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_KML-KML#readFeatures"
            },
            {
                "name": "readName",
                "type": 2,
                "description": "<p>Read the name of the KML.</p>",
                "url": "module-ol_format_KML-KML#readName"
            },
            {
                "name": "readNetworkLinks",
                "type": 3,
                "description": "<p>Read the network links of the KML.</p>",
                "url": "module-ol_format_KML-KML#readNetworkLinks"
            },
            {
                "name": "readProjection",
                "type": 4,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_KML-KML#readProjection"
            },
            {
                "name": "readRegion",
                "type": 5,
                "description": "<p>Read the regions of the KML.</p>",
                "url": "module-ol_format_KML-KML#readRegion"
            },
            {
                "name": "readRegionFromNode",
                "type": 6,
                "url": "module-ol_format_KML-KML#readRegionFromNode"
            },
            {
                "name": "writeFeatures",
                "type": 7,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_KML-KML#writeFeatures"
            },
            {
                "name": "writeFeaturesNode",
                "type": 8,
                "description": "<p>Encode an array of features in the KML format as an XML node. GeometryCollections,\nMultiPoints, MultiLineStrings, and MultiPolygons are output as MultiGeometries.</p>",
                "url": "module-ol_format_KML-KML#writeFeaturesNode"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/KML",
        "description": "[MODULE]",
        "url": "module-ol_format_KML",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "MVT",
        "description": "[CLASS]",
        "url": "module-ol_format_MVT-MVT",
        "members": [],
        "methods": [
            {
                "name": "readFeatures",
                "type": 0,
                "description": "<p>Read all features.</p>",
                "url": "module-ol_format_MVT-MVT#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 1,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_MVT-MVT#readProjection"
            },
            {
                "name": "setLayers",
                "type": 2,
                "description": "<p>Sets the layers that features will be read from.</p>",
                "url": "module-ol_format_MVT-MVT#setLayers"
            }
        ],
        "events": []
    },
    {
        "name": "OSMXML",
        "description": "[CLASS]",
        "url": "module-ol_format_OSMXML-OSMXML",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_OSMXML-OSMXML#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_OSMXML-OSMXML#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_OSMXML-OSMXML#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_OSMXML-OSMXML#writeFeatures"
            }
        ],
        "events": []
    },
    {
        "name": "Polyline",
        "description": "[CLASS]",
        "url": "module-ol_format_Polyline-Polyline",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read the feature from the source.</p>",
                "url": "module-ol_format_Polyline-Polyline#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read the features from the source.</p>",
                "url": "module-ol_format_Polyline-Polyline#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read the geometry from the source.</p>",
                "url": "module-ol_format_Polyline-Polyline#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_Polyline-Polyline#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as a string.</p>",
                "url": "module-ol_format_Polyline-Polyline#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_Polyline-Polyline#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Write a single geometry.</p>",
                "url": "module-ol_format_Polyline-Polyline#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/Polyline",
        "description": "[MODULE]",
        "url": "module-ol_format_Polyline",
        "members": [],
        "methods": [
            {
                "name": "decodeDeltas",
                "type": 0,
                "description": "<p>Decode a list of n-dimensional points from an encoded string</p>",
                "url": "module-ol_format_Polyline#.decodeDeltas"
            },
            {
                "name": "decodeFloats",
                "type": 1,
                "description": "<p>Decode a list of floating point numbers from an encoded string</p>",
                "url": "module-ol_format_Polyline#.decodeFloats"
            },
            {
                "name": "encodeDeltas",
                "type": 2,
                "description": "<p>Encode a list of n-dimensional points and return an encoded string</p>\n<p>Attention: This function will modify the passed array!</p>",
                "url": "module-ol_format_Polyline#.encodeDeltas"
            },
            {
                "name": "encodeFloats",
                "type": 3,
                "description": "<p>Encode a list of floating point numbers and return an encoded string</p>\n<p>Attention: This function will modify the passed array!</p>",
                "url": "module-ol_format_Polyline#.encodeFloats"
            }
        ],
        "events": []
    },
    {
        "name": "TextFeature",
        "description": "[CLASS]",
        "url": "module-ol_format_TextFeature-TextFeature",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read the feature from the source.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read the features from the source.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read the geometry from the source.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as a string.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Write a single geometry.</p>",
                "url": "module-ol_format_TextFeature-TextFeature#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "TopoJSON",
        "description": "[CLASS]",
        "url": "module-ol_format_TopoJSON-TopoJSON",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a feature.  Only works for a single feature. Use <code>readFeatures</code> to\nread a feature collection.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features.  Works with both a single feature and a feature\ncollection.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read a geometry.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as string.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Encode a geometry as string.</p>",
                "url": "module-ol_format_TopoJSON-TopoJSON#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/TopoJSON",
        "description": "[MODULE]",
        "url": "module-ol_format_TopoJSON",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "WFS",
        "description": "[CLASS]",
        "url": "module-ol_format_WFS-WFS",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_WFS-WFS#readFeature"
            },
            {
                "name": "readFeatureCollectionMetadata",
                "type": 1,
                "description": "<p>Read feature collection metadata of the source.</p>",
                "url": "module-ol_format_WFS-WFS#readFeatureCollectionMetadata"
            },
            {
                "name": "readFeatures",
                "type": 2,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_WFS-WFS#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_WFS-WFS#readProjection"
            },
            {
                "name": "readTransactionResponse",
                "type": 4,
                "description": "<p>Read transaction response of the source.</p>",
                "url": "module-ol_format_WFS-WFS#readTransactionResponse"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_WFS-WFS#writeFeatures"
            },
            {
                "name": "writeGetFeature",
                "type": 6,
                "description": "<p>Encode format as WFS <code>GetFeature</code> and return the Node.</p>",
                "url": "module-ol_format_WFS-WFS#writeGetFeature"
            },
            {
                "name": "writeTransaction",
                "type": 7,
                "description": "<p>Encode format as WFS <code>Transaction</code> and return the Node.</p>",
                "url": "module-ol_format_WFS-WFS#writeTransaction"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/WFS",
        "description": "[MODULE]",
        "url": "module-ol_format_WFS",
        "members": [],
        "methods": [
            {
                "name": "writeFilter",
                "type": 0,
                "description": "<p>Encode filter as WFS <code>Filter</code> and return the Node.</p>",
                "url": "module-ol_format_WFS#.writeFilter"
            }
        ],
        "events": []
    },
    {
        "name": "WKB",
        "description": "[CLASS]",
        "url": "module-ol_format_WKB-WKB",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature from a source.</p>",
                "url": "module-ol_format_WKB-WKB#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a source.</p>",
                "url": "module-ol_format_WKB-WKB#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read a single geometry from a source.</p>",
                "url": "module-ol_format_WKB-WKB#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection from a source.</p>",
                "url": "module-ol_format_WKB-WKB#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature in this format.</p>",
                "url": "module-ol_format_WKB-WKB#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features in this format.</p>",
                "url": "module-ol_format_WKB-WKB#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Write a single geometry in this format.</p>",
                "url": "module-ol_format_WKB-WKB#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "WKT",
        "description": "[CLASS]",
        "url": "module-ol_format_WKT-WKT",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read the feature from the source.</p>",
                "url": "module-ol_format_WKT-WKT#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read the features from the source.</p>",
                "url": "module-ol_format_WKT-WKT#readFeatures"
            },
            {
                "name": "readGeometry",
                "type": 2,
                "description": "<p>Read the geometry from the source.</p>",
                "url": "module-ol_format_WKT-WKT#readGeometry"
            },
            {
                "name": "readProjection",
                "type": 3,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_WKT-WKT#readProjection"
            },
            {
                "name": "writeFeature",
                "type": 4,
                "description": "<p>Encode a feature as a string.</p>",
                "url": "module-ol_format_WKT-WKT#writeFeature"
            },
            {
                "name": "writeFeatures",
                "type": 5,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_WKT-WKT#writeFeatures"
            },
            {
                "name": "writeGeometry",
                "type": 6,
                "description": "<p>Write a single geometry.</p>",
                "url": "module-ol_format_WKT-WKT#writeGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "ol/format/WKT",
        "description": "[MODULE]",
        "url": "module-ol_format_WKT",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "WMSCapabilities",
        "description": "[CLASS]",
        "url": "module-ol_format_WMSCapabilities-WMSCapabilities",
        "members": [],
        "methods": [
            {
                "name": "read",
                "type": 0,
                "description": "<p>Read the source document.</p>",
                "url": "module-ol_format_WMSCapabilities-WMSCapabilities#read"
            }
        ],
        "events": []
    },
    {
        "name": "WMSGetFeatureInfo",
        "description": "[CLASS]",
        "url": "module-ol_format_WMSGetFeatureInfo-WMSGetFeatureInfo",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_WMSGetFeatureInfo-WMSGetFeatureInfo#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_WMSGetFeatureInfo-WMSGetFeatureInfo#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_WMSGetFeatureInfo-WMSGetFeatureInfo#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_WMSGetFeatureInfo-WMSGetFeatureInfo#writeFeatures"
            }
        ],
        "events": []
    },
    {
        "name": "WMTSCapabilities",
        "description": "[CLASS]",
        "url": "module-ol_format_WMTSCapabilities-WMTSCapabilities",
        "members": [],
        "methods": [
            {
                "name": "read",
                "type": 0,
                "description": "<p>Read the source document.</p>",
                "url": "module-ol_format_WMTSCapabilities-WMTSCapabilities#read"
            }
        ],
        "events": []
    },
    {
        "name": "XML",
        "description": "[CLASS]",
        "url": "module-ol_format_XML-XML",
        "members": [],
        "methods": [
            {
                "name": "read",
                "type": 0,
                "description": "<p>Read the source document.</p>",
                "url": "module-ol_format_XML-XML#read"
            }
        ],
        "events": []
    },
    {
        "name": "XMLFeature",
        "description": "[CLASS]",
        "url": "module-ol_format_XMLFeature-XMLFeature",
        "members": [],
        "methods": [
            {
                "name": "readFeature",
                "type": 0,
                "description": "<p>Read a single feature.</p>",
                "url": "module-ol_format_XMLFeature-XMLFeature#readFeature"
            },
            {
                "name": "readFeatures",
                "type": 1,
                "description": "<p>Read all features from a feature collection.</p>",
                "url": "module-ol_format_XMLFeature-XMLFeature#readFeatures"
            },
            {
                "name": "readProjection",
                "type": 2,
                "description": "<p>Read the projection from the source.</p>",
                "url": "module-ol_format_XMLFeature-XMLFeature#readProjection"
            },
            {
                "name": "writeFeatures",
                "type": 3,
                "description": "<p>Encode an array of features as string.</p>",
                "url": "module-ol_format_XMLFeature-XMLFeature#writeFeatures"
            }
        ],
        "events": []
    },
    {
        "name": "Geolocation",
        "description": "[CLASS]",
        "url": "module-ol_Geolocation-Geolocation",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Geolocation-Geolocation#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Geolocation-Geolocation#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_Geolocation-Geolocation#get"
            },
            {
                "name": "getAccuracy",
                "type": 3,
                "description": "<p>Get the accuracy of the position in meters.</p>",
                "url": "module-ol_Geolocation-Geolocation#getAccuracy"
            },
            {
                "name": "getAccuracyGeometry",
                "type": 4,
                "description": "<p>Get a geometry of the position accuracy.</p>",
                "url": "module-ol_Geolocation-Geolocation#getAccuracyGeometry"
            },
            {
                "name": "getAltitude",
                "type": 5,
                "description": "<p>Get the altitude associated with the position.</p>",
                "url": "module-ol_Geolocation-Geolocation#getAltitude"
            },
            {
                "name": "getAltitudeAccuracy",
                "type": 6,
                "description": "<p>Get the altitude accuracy of the position.</p>",
                "url": "module-ol_Geolocation-Geolocation#getAltitudeAccuracy"
            },
            {
                "name": "getHeading",
                "type": 7,
                "description": "<p>Get the heading as radians clockwise from North.\nNote: depending on the browser, the heading is only defined if the <code>enableHighAccuracy</code>\nis set to <code>true</code> in the tracking options.</p>",
                "url": "module-ol_Geolocation-Geolocation#getHeading"
            },
            {
                "name": "getKeys",
                "type": 8,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_Geolocation-Geolocation#getKeys"
            },
            {
                "name": "getPosition",
                "type": 9,
                "description": "<p>Get the position of the device.</p>",
                "url": "module-ol_Geolocation-Geolocation#getPosition"
            },
            {
                "name": "getProjection",
                "type": 10,
                "description": "<p>Get the projection associated with the position.</p>",
                "url": "module-ol_Geolocation-Geolocation#getProjection"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_Geolocation-Geolocation#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Geolocation-Geolocation#getRevision"
            },
            {
                "name": "getSpeed",
                "type": 13,
                "description": "<p>Get the speed in meters per second.</p>",
                "url": "module-ol_Geolocation-Geolocation#getSpeed"
            },
            {
                "name": "getTracking",
                "type": 14,
                "description": "<p>Determine if the device location is being tracked.</p>",
                "url": "module-ol_Geolocation-Geolocation#getTracking"
            },
            {
                "name": "getTrackingOptions",
                "type": 15,
                "description": "<p>Get the tracking options.\nSee <a href=\"https://www.w3.org/TR/geolocation-API/#position-options\">https://www.w3.org/TR/geolocation-API/#position-options</a>.</p>",
                "url": "module-ol_Geolocation-Geolocation#getTrackingOptions"
            },
            {
                "name": "on",
                "type": 16,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Geolocation-Geolocation#on"
            },
            {
                "name": "once",
                "type": 17,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Geolocation-Geolocation#once"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_Geolocation-Geolocation#set"
            },
            {
                "name": "setProjection",
                "type": 19,
                "description": "<p>Set the projection to use for transforming the coordinates.</p>",
                "url": "module-ol_Geolocation-Geolocation#setProjection"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_Geolocation-Geolocation#setProperties"
            },
            {
                "name": "setTracking",
                "type": 21,
                "description": "<p>Enable or disable tracking.</p>",
                "url": "module-ol_Geolocation-Geolocation#setTracking"
            },
            {
                "name": "setTrackingOptions",
                "type": 22,
                "description": "<p>Set the tracking options.\nSee <a href=\"http://www.w3.org/TR/geolocation-API/#position-options\">http://www.w3.org/TR/geolocation-API/#position-options</a>.</p>",
                "url": "module-ol_Geolocation-Geolocation#setTrackingOptions"
            },
            {
                "name": "un",
                "type": 23,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Geolocation-Geolocation#un"
            },
            {
                "name": "unset",
                "type": 24,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_Geolocation-Geolocation#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/Geolocation",
        "description": "[MODULE]",
        "url": "module-ol_Geolocation",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Circle",
        "description": "[CLASS]",
        "url": "module-ol_geom_Circle-Circle",
        "members": [],
        "methods": [
            {
                "name": "applyTransform",
                "type": 0,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_Circle-Circle#applyTransform"
            },
            {
                "name": "changed",
                "type": 1,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_Circle-Circle#changed"
            },
            {
                "name": "clone",
                "type": 2,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 3,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_Circle-Circle#dispatchEvent"
            },
            {
                "name": "get",
                "type": 4,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_Circle-Circle#get"
            },
            {
                "name": "getCenter",
                "type": 5,
                "description": "<p>Return the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_Circle-Circle#getCenter"
            },
            {
                "name": "getClosestPoint",
                "type": 6,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_Circle-Circle#getClosestPoint"
            },
            {
                "name": "getExtent",
                "type": 7,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 8,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 9,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_Circle-Circle#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 10,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 11,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#getLayout"
            },
            {
                "name": "getProperties",
                "type": 12,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_Circle-Circle#getProperties"
            },
            {
                "name": "getRadius",
                "type": 13,
                "description": "<p>Return the radius of the circle.</p>",
                "url": "module-ol_geom_Circle-Circle#getRadius"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_Circle-Circle#getRevision"
            },
            {
                "name": "getType",
                "type": 15,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 16,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_Circle-Circle#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 17,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_Circle-Circle#intersectsExtent"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_Circle-Circle#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_Circle-Circle#once"
            },
            {
                "name": "rotate",
                "type": 20,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Circle-Circle#rotate"
            },
            {
                "name": "scale",
                "type": 21,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Circle-Circle#scale"
            },
            {
                "name": "set",
                "type": 22,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_Circle-Circle#set"
            },
            {
                "name": "setCenter",
                "type": 23,
                "description": "<p>Set the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_Circle-Circle#setCenter"
            },
            {
                "name": "setCenterAndRadius",
                "type": 24,
                "description": "<p>Set the center (as {@link module:ol/coordinate~Coordinate coordinate}) and the radius (as\nnumber) of the circle.</p>",
                "url": "module-ol_geom_Circle-Circle#setCenterAndRadius"
            },
            {
                "name": "setProperties",
                "type": 25,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_Circle-Circle#setProperties"
            },
            {
                "name": "setRadius",
                "type": 26,
                "description": "<p>Set the radius of the circle. The radius is in the units of the projection.</p>",
                "url": "module-ol_geom_Circle-Circle#setRadius"
            },
            {
                "name": "simplify",
                "type": 27,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_Circle-Circle#simplify"
            },
            {
                "name": "transform",
                "type": 28,
                "description": "<p>Transform each coordinate of the circle from one coordinate reference system\nto another. The geometry is modified in place.\nIf you do not want the geometry modified in place, first clone() it and\nthen use this function on the clone.</p>\n<p>Internally a circle is currently represented by two points: the center of\nthe circle <code>[cx, cy]</code>, and the point to the right of the circle\n<code>[cx + r, cy]</code>. This <code>transform</code> function just transforms these two points.\nSo the resulting geometry is also a circle, and that circle does not\ncorrespond to the shape that would be obtained by transforming every point\nof the original circle.</p>",
                "url": "module-ol_geom_Circle-Circle#transform"
            },
            {
                "name": "translate",
                "type": 29,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_Circle-Circle#translate"
            },
            {
                "name": "un",
                "type": 30,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_Circle-Circle#un"
            },
            {
                "name": "unset",
                "type": 31,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_Circle-Circle#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Geometry",
        "description": "[CLASS]",
        "url": "module-ol_geom_Geometry-Geometry",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_Geometry-Geometry#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_Geometry-Geometry#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_Geometry-Geometry#get"
            },
            {
                "name": "getClosestPoint",
                "type": 3,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_Geometry-Geometry#getClosestPoint"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_Geometry-Geometry#getExtent"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_Geometry-Geometry#getKeys"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_Geometry-Geometry#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_Geometry-Geometry#getRevision"
            },
            {
                "name": "intersectsCoordinate",
                "type": 8,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_Geometry-Geometry#intersectsCoordinate"
            },
            {
                "name": "on",
                "type": 9,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_Geometry-Geometry#on"
            },
            {
                "name": "once",
                "type": 10,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_Geometry-Geometry#once"
            },
            {
                "name": "rotate",
                "type": 11,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Geometry-Geometry#rotate"
            },
            {
                "name": "scale",
                "type": 12,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Geometry-Geometry#scale"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_Geometry-Geometry#set"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_Geometry-Geometry#setProperties"
            },
            {
                "name": "simplify",
                "type": 15,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_Geometry-Geometry#simplify"
            },
            {
                "name": "transform",
                "type": 16,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_Geometry-Geometry#transform"
            },
            {
                "name": "translate",
                "type": 17,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_Geometry-Geometry#translate"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_Geometry-Geometry#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_Geometry-Geometry#unset"
            }
        ],
        "events": []
    },
    {
        "name": "GeometryCollection",
        "description": "[CLASS]",
        "url": "module-ol_geom_GeometryCollection-GeometryCollection",
        "members": [],
        "methods": [
            {
                "name": "applyTransform",
                "type": 0,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#applyTransform"
            },
            {
                "name": "changed",
                "type": 1,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#changed"
            },
            {
                "name": "clone",
                "type": 2,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 3,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#dispatchEvent"
            },
            {
                "name": "get",
                "type": 4,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#get"
            },
            {
                "name": "getClosestPoint",
                "type": 5,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getClosestPoint"
            },
            {
                "name": "getExtent",
                "type": 6,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getExtent"
            },
            {
                "name": "getGeometries",
                "type": 7,
                "description": "<p>Return the geometries that make up this geometry collection.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getGeometries"
            },
            {
                "name": "getKeys",
                "type": 8,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getKeys"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getRevision"
            },
            {
                "name": "getType",
                "type": 11,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 12,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 13,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#intersectsExtent"
            },
            {
                "name": "on",
                "type": 14,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#on"
            },
            {
                "name": "once",
                "type": 15,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#once"
            },
            {
                "name": "rotate",
                "type": 16,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#rotate"
            },
            {
                "name": "scale",
                "type": 17,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#scale"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#set"
            },
            {
                "name": "setGeometries",
                "type": 19,
                "description": "<p>Set the geometries that make up this geometry collection.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#setGeometries"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#setProperties"
            },
            {
                "name": "simplify",
                "type": 21,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#simplify"
            },
            {
                "name": "transform",
                "type": 22,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#transform"
            },
            {
                "name": "translate",
                "type": 23,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#translate"
            },
            {
                "name": "un",
                "type": 24,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#un"
            },
            {
                "name": "unset",
                "type": 25,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_GeometryCollection-GeometryCollection#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/geom/GeometryLayout",
        "description": "[MODULE]",
        "url": "module-ol_geom_GeometryLayout",
        "members": [
            {
                "name": "module:ol/geom/GeometryLayout",
                "type": 0,
                "description": "<p>The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')\nor measure ('M') coordinate is available. Supported values are <code>'XY'</code>,\n<code>'XYZ'</code>, <code>'XYM'</code>, <code>'XYZM'</code>.</p>",
                "url": "module-ol_geom_GeometryLayout"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/geom/GeometryType",
        "description": "[MODULE]",
        "url": "module-ol_geom_GeometryType",
        "members": [
            {
                "name": "module:ol/geom/GeometryType",
                "type": 0,
                "description": "<p>The geometry type. One of <code>'Point'</code>, <code>'LineString'</code>, <code>'LinearRing'</code>,\n<code>'Polygon'</code>, <code>'MultiPoint'</code>, <code>'MultiLineString'</code>, <code>'MultiPolygon'</code>,\n<code>'GeometryCollection'</code>, <code>'Circle'</code>.</p>",
                "url": "module-ol_geom_GeometryType"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "LinearRing",
        "description": "[CLASS]",
        "url": "module-ol_geom_LinearRing-LinearRing",
        "members": [],
        "methods": [
            {
                "name": "applyTransform",
                "type": 0,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#applyTransform"
            },
            {
                "name": "changed",
                "type": 1,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#changed"
            },
            {
                "name": "clone",
                "type": 2,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 3,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#dispatchEvent"
            },
            {
                "name": "get",
                "type": 4,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#get"
            },
            {
                "name": "getArea",
                "type": 5,
                "description": "<p>Return the area of the linear ring on projected plane.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getArea"
            },
            {
                "name": "getClosestPoint",
                "type": 6,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getClosestPoint"
            },
            {
                "name": "getCoordinates",
                "type": 7,
                "description": "<p>Return the coordinates of the linear ring.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 8,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 9,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 10,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 11,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 12,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getLayout"
            },
            {
                "name": "getProperties",
                "type": 13,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getProperties"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getRevision"
            },
            {
                "name": "getType",
                "type": 15,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 16,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 17,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#intersectsExtent"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#once"
            },
            {
                "name": "rotate",
                "type": 20,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#rotate"
            },
            {
                "name": "scale",
                "type": 21,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#scale"
            },
            {
                "name": "set",
                "type": 22,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#set"
            },
            {
                "name": "setCoordinates",
                "type": 23,
                "description": "<p>Set the coordinates of the linear ring.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 24,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#setProperties"
            },
            {
                "name": "simplify",
                "type": 25,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#simplify"
            },
            {
                "name": "transform",
                "type": 26,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#transform"
            },
            {
                "name": "translate",
                "type": 27,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#translate"
            },
            {
                "name": "un",
                "type": 28,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#un"
            },
            {
                "name": "unset",
                "type": 29,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_LinearRing-LinearRing#unset"
            }
        ],
        "events": []
    },
    {
        "name": "LineString",
        "description": "[CLASS]",
        "url": "module-ol_geom_LineString-LineString",
        "members": [],
        "methods": [
            {
                "name": "appendCoordinate",
                "type": 0,
                "description": "<p>Append the passed coordinate to the coordinates of the linestring.</p>",
                "url": "module-ol_geom_LineString-LineString#appendCoordinate"
            },
            {
                "name": "applyTransform",
                "type": 1,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_LineString-LineString#applyTransform"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_LineString-LineString#changed"
            },
            {
                "name": "clone",
                "type": 3,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_LineString-LineString#dispatchEvent"
            },
            {
                "name": "forEachSegment",
                "type": 5,
                "description": "<p>Iterate over each segment, calling the provided callback.\nIf the callback returns a truthy value the function returns that\nvalue immediately. Otherwise the function returns <code>false</code>.</p>",
                "url": "module-ol_geom_LineString-LineString#forEachSegment"
            },
            {
                "name": "get",
                "type": 6,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_LineString-LineString#get"
            },
            {
                "name": "getClosestPoint",
                "type": 7,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_LineString-LineString#getClosestPoint"
            },
            {
                "name": "getCoordinateAt",
                "type": 8,
                "description": "<p>Return the coordinate at the provided fraction along the linestring.\nThe <code>fraction</code> is a number between 0 and 1, where 0 is the start of the\nlinestring and 1 is the end.</p>",
                "url": "module-ol_geom_LineString-LineString#getCoordinateAt"
            },
            {
                "name": "getCoordinateAtM",
                "type": 9,
                "description": "<p>Returns the coordinate at <code>m</code> using linear interpolation, or <code>null</code> if no\nsuch coordinate exists.</p>\n<p><code>opt_extrapolate</code> controls extrapolation beyond the range of Ms in the\nMultiLineString. If <code>opt_extrapolate</code> is <code>true</code> then Ms less than the first\nM will return the first coordinate and Ms greater than the last M will\nreturn the last coordinate.</p>",
                "url": "module-ol_geom_LineString-LineString#getCoordinateAtM"
            },
            {
                "name": "getCoordinates",
                "type": 10,
                "description": "<p>Return the coordinates of the linestring.</p>",
                "url": "module-ol_geom_LineString-LineString#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 11,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 12,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 13,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_LineString-LineString#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 14,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 15,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#getLayout"
            },
            {
                "name": "getLength",
                "type": 16,
                "description": "<p>Return the length of the linestring on projected plane.</p>",
                "url": "module-ol_geom_LineString-LineString#getLength"
            },
            {
                "name": "getProperties",
                "type": 17,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_LineString-LineString#getProperties"
            },
            {
                "name": "getRevision",
                "type": 18,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_LineString-LineString#getRevision"
            },
            {
                "name": "getType",
                "type": 19,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 20,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_LineString-LineString#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 21,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_LineString-LineString#intersectsExtent"
            },
            {
                "name": "on",
                "type": 22,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_LineString-LineString#on"
            },
            {
                "name": "once",
                "type": 23,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_LineString-LineString#once"
            },
            {
                "name": "rotate",
                "type": 24,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_LineString-LineString#rotate"
            },
            {
                "name": "scale",
                "type": 25,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_LineString-LineString#scale"
            },
            {
                "name": "set",
                "type": 26,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_LineString-LineString#set"
            },
            {
                "name": "setCoordinates",
                "type": 27,
                "description": "<p>Set the coordinates of the linestring.</p>",
                "url": "module-ol_geom_LineString-LineString#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 28,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_LineString-LineString#setProperties"
            },
            {
                "name": "simplify",
                "type": 29,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_LineString-LineString#simplify"
            },
            {
                "name": "transform",
                "type": 30,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_LineString-LineString#transform"
            },
            {
                "name": "translate",
                "type": 31,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_LineString-LineString#translate"
            },
            {
                "name": "un",
                "type": 32,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_LineString-LineString#un"
            },
            {
                "name": "unset",
                "type": 33,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_LineString-LineString#unset"
            }
        ],
        "events": []
    },
    {
        "name": "MultiLineString",
        "description": "[CLASS]",
        "url": "module-ol_geom_MultiLineString-MultiLineString",
        "members": [],
        "methods": [
            {
                "name": "appendLineString",
                "type": 0,
                "description": "<p>Append the passed linestring to the multilinestring.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#appendLineString"
            },
            {
                "name": "applyTransform",
                "type": 1,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#applyTransform"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#changed"
            },
            {
                "name": "clone",
                "type": 3,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#dispatchEvent"
            },
            {
                "name": "get",
                "type": 5,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#get"
            },
            {
                "name": "getClosestPoint",
                "type": 6,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getClosestPoint"
            },
            {
                "name": "getCoordinateAtM",
                "type": 7,
                "description": "<p>Returns the coordinate at <code>m</code> using linear interpolation, or <code>null</code> if no\nsuch coordinate exists.</p>\n<p><code>opt_extrapolate</code> controls extrapolation beyond the range of Ms in the\nMultiLineString. If <code>opt_extrapolate</code> is <code>true</code> then Ms less than the first\nM will return the first coordinate and Ms greater than the last M will\nreturn the last coordinate.</p>\n<p><code>opt_interpolate</code> controls interpolation between consecutive LineStrings\nwithin the MultiLineString. If <code>opt_interpolate</code> is <code>true</code> the coordinates\nwill be linearly interpolated between the last coordinate of one LineString\nand the first coordinate of the next LineString.  If <code>opt_interpolate</code> is\n<code>false</code> then the function will return <code>null</code> for Ms falling between\nLineStrings.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getCoordinateAtM"
            },
            {
                "name": "getCoordinates",
                "type": 8,
                "description": "<p>Return the coordinates of the multilinestring.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 9,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 10,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 11,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 12,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 13,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getLayout"
            },
            {
                "name": "getLineString",
                "type": 14,
                "description": "<p>Return the linestring at the specified index.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getLineString"
            },
            {
                "name": "getLineStrings",
                "type": 15,
                "description": "<p>Return the linestrings of this multilinestring.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getLineStrings"
            },
            {
                "name": "getProperties",
                "type": 16,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getProperties"
            },
            {
                "name": "getRevision",
                "type": 17,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getRevision"
            },
            {
                "name": "getType",
                "type": 18,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 19,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 20,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#intersectsExtent"
            },
            {
                "name": "on",
                "type": 21,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#on"
            },
            {
                "name": "once",
                "type": 22,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#once"
            },
            {
                "name": "rotate",
                "type": 23,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#rotate"
            },
            {
                "name": "scale",
                "type": 24,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#scale"
            },
            {
                "name": "set",
                "type": 25,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#set"
            },
            {
                "name": "setCoordinates",
                "type": 26,
                "description": "<p>Set the coordinates of the multilinestring.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 27,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#setProperties"
            },
            {
                "name": "simplify",
                "type": 28,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#simplify"
            },
            {
                "name": "transform",
                "type": 29,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#transform"
            },
            {
                "name": "translate",
                "type": 30,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#translate"
            },
            {
                "name": "un",
                "type": 31,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#un"
            },
            {
                "name": "unset",
                "type": 32,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_MultiLineString-MultiLineString#unset"
            }
        ],
        "events": []
    },
    {
        "name": "MultiPoint",
        "description": "[CLASS]",
        "url": "module-ol_geom_MultiPoint-MultiPoint",
        "members": [],
        "methods": [
            {
                "name": "appendPoint",
                "type": 0,
                "description": "<p>Append the passed point to this multipoint.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#appendPoint"
            },
            {
                "name": "applyTransform",
                "type": 1,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#applyTransform"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#changed"
            },
            {
                "name": "clone",
                "type": 3,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#dispatchEvent"
            },
            {
                "name": "get",
                "type": 5,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#get"
            },
            {
                "name": "getClosestPoint",
                "type": 6,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getClosestPoint"
            },
            {
                "name": "getCoordinates",
                "type": 7,
                "description": "<p>Return the coordinates of the multipoint.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 8,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 9,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 10,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 11,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 12,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getLayout"
            },
            {
                "name": "getPoint",
                "type": 13,
                "description": "<p>Return the point at the specified index.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getPoint"
            },
            {
                "name": "getPoints",
                "type": 14,
                "description": "<p>Return the points of this multipoint.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getPoints"
            },
            {
                "name": "getProperties",
                "type": 15,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getProperties"
            },
            {
                "name": "getRevision",
                "type": 16,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getRevision"
            },
            {
                "name": "getType",
                "type": 17,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 18,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 19,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#intersectsExtent"
            },
            {
                "name": "on",
                "type": 20,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#on"
            },
            {
                "name": "once",
                "type": 21,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#once"
            },
            {
                "name": "rotate",
                "type": 22,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#rotate"
            },
            {
                "name": "scale",
                "type": 23,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#scale"
            },
            {
                "name": "set",
                "type": 24,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#set"
            },
            {
                "name": "setCoordinates",
                "type": 25,
                "description": "<p>Set the coordinates of the multipoint.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 26,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#setProperties"
            },
            {
                "name": "simplify",
                "type": 27,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#simplify"
            },
            {
                "name": "transform",
                "type": 28,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#transform"
            },
            {
                "name": "translate",
                "type": 29,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#translate"
            },
            {
                "name": "un",
                "type": 30,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#un"
            },
            {
                "name": "unset",
                "type": 31,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_MultiPoint-MultiPoint#unset"
            }
        ],
        "events": []
    },
    {
        "name": "MultiPolygon",
        "description": "[CLASS]",
        "url": "module-ol_geom_MultiPolygon-MultiPolygon",
        "members": [],
        "methods": [
            {
                "name": "appendPolygon",
                "type": 0,
                "description": "<p>Append the passed polygon to this multipolygon.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#appendPolygon"
            },
            {
                "name": "applyTransform",
                "type": 1,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#applyTransform"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#changed"
            },
            {
                "name": "clone",
                "type": 3,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#dispatchEvent"
            },
            {
                "name": "get",
                "type": 5,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#get"
            },
            {
                "name": "getArea",
                "type": 6,
                "description": "<p>Return the area of the multipolygon on projected plane.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getArea"
            },
            {
                "name": "getClosestPoint",
                "type": 7,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getClosestPoint"
            },
            {
                "name": "getCoordinates",
                "type": 8,
                "description": "<p>Get the coordinate array for this geometry.  This array has the structure\nof a GeoJSON coordinate array for multi-polygons.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 9,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 10,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getFirstCoordinate"
            },
            {
                "name": "getInteriorPoints",
                "type": 11,
                "description": "<p>Return the interior points as {@link module:ol/geom/MultiPoint~MultiPoint multipoint}.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getInteriorPoints"
            },
            {
                "name": "getKeys",
                "type": 12,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 13,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 14,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getLayout"
            },
            {
                "name": "getPolygon",
                "type": 15,
                "description": "<p>Return the polygon at the specified index.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getPolygon"
            },
            {
                "name": "getPolygons",
                "type": 16,
                "description": "<p>Return the polygons of this multipolygon.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getPolygons"
            },
            {
                "name": "getProperties",
                "type": 17,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getProperties"
            },
            {
                "name": "getRevision",
                "type": 18,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getRevision"
            },
            {
                "name": "getType",
                "type": 19,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 20,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 21,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#intersectsExtent"
            },
            {
                "name": "on",
                "type": 22,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#on"
            },
            {
                "name": "once",
                "type": 23,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#once"
            },
            {
                "name": "rotate",
                "type": 24,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#rotate"
            },
            {
                "name": "scale",
                "type": 25,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#scale"
            },
            {
                "name": "set",
                "type": 26,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#set"
            },
            {
                "name": "setCoordinates",
                "type": 27,
                "description": "<p>Set the coordinates of the multipolygon.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 28,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#setProperties"
            },
            {
                "name": "simplify",
                "type": 29,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#simplify"
            },
            {
                "name": "transform",
                "type": 30,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#transform"
            },
            {
                "name": "translate",
                "type": 31,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#translate"
            },
            {
                "name": "un",
                "type": 32,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#un"
            },
            {
                "name": "unset",
                "type": 33,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_MultiPolygon-MultiPolygon#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Point",
        "description": "[CLASS]",
        "url": "module-ol_geom_Point-Point",
        "members": [],
        "methods": [
            {
                "name": "applyTransform",
                "type": 0,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_Point-Point#applyTransform"
            },
            {
                "name": "changed",
                "type": 1,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_Point-Point#changed"
            },
            {
                "name": "clone",
                "type": 2,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_Point-Point#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 3,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_Point-Point#dispatchEvent"
            },
            {
                "name": "get",
                "type": 4,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_Point-Point#get"
            },
            {
                "name": "getClosestPoint",
                "type": 5,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_Point-Point#getClosestPoint"
            },
            {
                "name": "getCoordinates",
                "type": 6,
                "description": "<p>Return the coordinate of the point.</p>",
                "url": "module-ol_geom_Point-Point#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 7,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_Point-Point#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 8,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_Point-Point#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 9,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_Point-Point#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 10,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_Point-Point#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 11,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_Point-Point#getLayout"
            },
            {
                "name": "getProperties",
                "type": 12,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_Point-Point#getProperties"
            },
            {
                "name": "getRevision",
                "type": 13,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_Point-Point#getRevision"
            },
            {
                "name": "getType",
                "type": 14,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_Point-Point#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 15,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_Point-Point#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 16,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_Point-Point#intersectsExtent"
            },
            {
                "name": "on",
                "type": 17,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_Point-Point#on"
            },
            {
                "name": "once",
                "type": 18,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_Point-Point#once"
            },
            {
                "name": "rotate",
                "type": 19,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Point-Point#rotate"
            },
            {
                "name": "scale",
                "type": 20,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Point-Point#scale"
            },
            {
                "name": "set",
                "type": 21,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_Point-Point#set"
            },
            {
                "name": "setCoordinates",
                "type": 22,
                "url": "module-ol_geom_Point-Point#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 23,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_Point-Point#setProperties"
            },
            {
                "name": "simplify",
                "type": 24,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_Point-Point#simplify"
            },
            {
                "name": "transform",
                "type": 25,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_Point-Point#transform"
            },
            {
                "name": "translate",
                "type": 26,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_Point-Point#translate"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_Point-Point#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_Point-Point#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Polygon",
        "description": "[CLASS]",
        "url": "module-ol_geom_Polygon-Polygon",
        "members": [],
        "methods": [
            {
                "name": "appendLinearRing",
                "type": 0,
                "description": "<p>Append the passed linear ring to this polygon.</p>",
                "url": "module-ol_geom_Polygon-Polygon#appendLinearRing"
            },
            {
                "name": "applyTransform",
                "type": 1,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_Polygon-Polygon#applyTransform"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_Polygon-Polygon#changed"
            },
            {
                "name": "clone",
                "type": 3,
                "description": "<p>Make a complete copy of the geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#clone"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_Polygon-Polygon#dispatchEvent"
            },
            {
                "name": "get",
                "type": 5,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_Polygon-Polygon#get"
            },
            {
                "name": "getArea",
                "type": 6,
                "description": "<p>Return the area of the polygon on projected plane.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getArea"
            },
            {
                "name": "getClosestPoint",
                "type": 7,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getClosestPoint"
            },
            {
                "name": "getCoordinates",
                "type": 8,
                "description": "<p>Get the coordinate array for this geometry.  This array has the structure\nof a GeoJSON coordinate array for polygons.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getCoordinates"
            },
            {
                "name": "getExtent",
                "type": 9,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 10,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getFirstCoordinate"
            },
            {
                "name": "getInteriorPoint",
                "type": 11,
                "description": "<p>Return an interior point of the polygon.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getInteriorPoint"
            },
            {
                "name": "getKeys",
                "type": 12,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 13,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 14,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getLayout"
            },
            {
                "name": "getLinearRing",
                "type": 15,
                "description": "<p>Return the Nth linear ring of the polygon geometry. Return <code>null</code> if the\ngiven index is out of range.\nThe exterior linear ring is available at index <code>0</code> and the interior rings\nat index <code>1</code> and beyond.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getLinearRing"
            },
            {
                "name": "getLinearRingCount",
                "type": 16,
                "description": "<p>Return the number of rings of the polygon,  this includes the exterior\nring and any interior rings.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getLinearRingCount"
            },
            {
                "name": "getLinearRings",
                "type": 17,
                "description": "<p>Return the linear rings of the polygon.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getLinearRings"
            },
            {
                "name": "getProperties",
                "type": 18,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getProperties"
            },
            {
                "name": "getRevision",
                "type": 19,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getRevision"
            },
            {
                "name": "getType",
                "type": 20,
                "description": "<p>Get the type of this geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#getType"
            },
            {
                "name": "intersectsCoordinate",
                "type": 21,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_Polygon-Polygon#intersectsCoordinate"
            },
            {
                "name": "intersectsExtent",
                "type": 22,
                "description": "<p>Test if the geometry and the passed extent intersect.</p>",
                "url": "module-ol_geom_Polygon-Polygon#intersectsExtent"
            },
            {
                "name": "on",
                "type": 23,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_Polygon-Polygon#on"
            },
            {
                "name": "once",
                "type": 24,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_Polygon-Polygon#once"
            },
            {
                "name": "rotate",
                "type": 25,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Polygon-Polygon#rotate"
            },
            {
                "name": "scale",
                "type": 26,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_Polygon-Polygon#scale"
            },
            {
                "name": "set",
                "type": 27,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_Polygon-Polygon#set"
            },
            {
                "name": "setCoordinates",
                "type": 28,
                "description": "<p>Set the coordinates of the polygon.</p>",
                "url": "module-ol_geom_Polygon-Polygon#setCoordinates"
            },
            {
                "name": "setProperties",
                "type": 29,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_Polygon-Polygon#setProperties"
            },
            {
                "name": "simplify",
                "type": 30,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_Polygon-Polygon#simplify"
            },
            {
                "name": "transform",
                "type": 31,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_Polygon-Polygon#transform"
            },
            {
                "name": "translate",
                "type": 32,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_Polygon-Polygon#translate"
            },
            {
                "name": "un",
                "type": 33,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_Polygon-Polygon#un"
            },
            {
                "name": "unset",
                "type": 34,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_Polygon-Polygon#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/geom/Polygon",
        "description": "[MODULE]",
        "url": "module-ol_geom_Polygon",
        "members": [],
        "methods": [
            {
                "name": "circular",
                "type": 0,
                "description": "<p>Create an approximation of a circle on the surface of a sphere.</p>",
                "url": "module-ol_geom_Polygon#.circular"
            },
            {
                "name": "fromCircle",
                "type": 1,
                "description": "<p>Create a regular polygon from a circle.</p>",
                "url": "module-ol_geom_Polygon#.fromCircle"
            },
            {
                "name": "fromExtent",
                "type": 2,
                "description": "<p>Create a polygon from an extent. The layout used is <code>XY</code>.</p>",
                "url": "module-ol_geom_Polygon#.fromExtent"
            }
        ],
        "events": []
    },
    {
        "name": "SimpleGeometry",
        "description": "[CLASS]",
        "url": "module-ol_geom_SimpleGeometry-SimpleGeometry",
        "members": [],
        "methods": [
            {
                "name": "applyTransform",
                "type": 0,
                "description": "<p>Apply a transform function to the coordinates of the geometry.\nThe geometry is modified in place.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#applyTransform"
            },
            {
                "name": "changed",
                "type": 1,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#get"
            },
            {
                "name": "getClosestPoint",
                "type": 4,
                "description": "<p>Return the closest point of the geometry to the passed point as\n{@link module:ol/coordinate~Coordinate coordinate}.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getClosestPoint"
            },
            {
                "name": "getExtent",
                "type": 5,
                "description": "<p>Get the extent of the geometry.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getExtent"
            },
            {
                "name": "getFirstCoordinate",
                "type": 6,
                "description": "<p>Return the first coordinate of the geometry.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getFirstCoordinate"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getKeys"
            },
            {
                "name": "getLastCoordinate",
                "type": 8,
                "description": "<p>Return the last coordinate of the geometry.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getLastCoordinate"
            },
            {
                "name": "getLayout",
                "type": 9,
                "description": "<p>Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getLayout"
            },
            {
                "name": "getProperties",
                "type": 10,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getProperties"
            },
            {
                "name": "getRevision",
                "type": 11,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#getRevision"
            },
            {
                "name": "intersectsCoordinate",
                "type": 12,
                "description": "<p>Returns true if this geometry includes the specified coordinate. If the\ncoordinate is on the boundary of the geometry, returns false.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#intersectsCoordinate"
            },
            {
                "name": "on",
                "type": 13,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#on"
            },
            {
                "name": "once",
                "type": 14,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#once"
            },
            {
                "name": "rotate",
                "type": 15,
                "description": "<p>Rotate the geometry around a given coordinate. This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#rotate"
            },
            {
                "name": "scale",
                "type": 16,
                "description": "<p>Scale the geometry (with an optional origin).  This modifies the geometry\ncoordinates in place.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#scale"
            },
            {
                "name": "set",
                "type": 17,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#set"
            },
            {
                "name": "setProperties",
                "type": 18,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#setProperties"
            },
            {
                "name": "simplify",
                "type": 19,
                "description": "<p>Create a simplified version of this geometry.  For linestrings, this uses\nthe <a href=\"https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm\">Douglas Peucker</a>\nalgorithm.  For polygons, a quantization-based\nsimplification is used to preserve topology.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#simplify"
            },
            {
                "name": "transform",
                "type": 20,
                "description": "<p>Transform each coordinate of the geometry from one coordinate reference\nsystem to another. The geometry is modified in place.\nFor example, a line will be transformed to a line and a circle to a circle.\nIf you do not want the geometry modified in place, first <code>clone()</code> it and\nthen use this function on the clone.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#transform"
            },
            {
                "name": "translate",
                "type": 21,
                "description": "<p>Translate the geometry.  This modifies the geometry coordinates in place.  If\ninstead you want a new geometry, first <code>clone()</code> this geometry.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#translate"
            },
            {
                "name": "un",
                "type": 22,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#un"
            },
            {
                "name": "unset",
                "type": 23,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_geom_SimpleGeometry-SimpleGeometry#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/has",
        "description": "[MODULE]",
        "url": "module-ol_has",
        "members": [
            {
                "name": "DEVICE_PIXEL_RATIO",
                "type": 0,
                "description": "<p>The ratio between physical pixels and device-independent pixels\n(dips) on the device (<code>window.devicePixelRatio</code>).</p>",
                "url": "module-ol_has#.DEVICE_PIXEL_RATIO"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ImageWrapper",
        "description": "[CLASS]",
        "url": "module-ol_Image-ImageWrapper",
        "members": [],
        "methods": [
            {
                "name": "dispatchEvent",
                "type": 0,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Image-ImageWrapper#dispatchEvent"
            },
            {
                "name": "getImage",
                "type": 1,
                "url": "module-ol_Image-ImageWrapper#getImage"
            },
            {
                "name": "load",
                "type": 2,
                "description": "<p>Load the image or retry if loading previously failed.\nLoading is taken care of by the tile queue, and calling this method is\nonly needed for preloading or for reloading in case of an error.</p>",
                "url": "module-ol_Image-ImageWrapper#load"
            }
        ],
        "events": []
    },
    {
        "name": "ImageTile",
        "description": "[CLASS]",
        "url": "module-ol_ImageTile-ImageTile",
        "members": [],
        "methods": [
            {
                "name": "dispatchEvent",
                "type": 0,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_ImageTile-ImageTile#dispatchEvent"
            },
            {
                "name": "getImage",
                "type": 1,
                "description": "<p>Get the HTML image element for this tile (may be a Canvas, Image, or Video).</p>",
                "url": "module-ol_ImageTile-ImageTile#getImage"
            },
            {
                "name": "getTileCoord",
                "type": 2,
                "description": "<p>Get the tile coordinate for this tile.</p>",
                "url": "module-ol_ImageTile-ImageTile#getTileCoord"
            },
            {
                "name": "load",
                "type": 3,
                "description": "<p>Load not yet loaded URI.</p>",
                "url": "module-ol_ImageTile-ImageTile#load"
            },
            {
                "name": "setState",
                "type": 4,
                "description": "<p>Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,\nit is important to set the state correctly to {@link module:ol/TileState~ERROR}\nwhen the tile cannot be loaded. Otherwise the tile cannot be removed from\nthe tile queue and will block other requests.</p>",
                "url": "module-ol_ImageTile-ImageTile#setState"
            }
        ],
        "events": []
    },
    {
        "name": "ol/interaction",
        "description": "[MODULE]",
        "url": "module-ol_interaction",
        "members": [],
        "methods": [
            {
                "name": "defaults",
                "type": 0,
                "description": "<p>Set of interactions included in maps by default. Specific interactions can be\nexcluded by setting the appropriate option to false in the constructor\noptions, but the order of the interactions is fixed.  If you want to specify\na different order for interactions, you will need to create your own\n{@link module:ol/interaction/Interaction~Interaction} instances and insert\nthem into a {@link module:ol/Collection~Collection} in the order you want\nbefore creating your {@link module:ol/Map~Map} instance. Changing the order can\nbe of interest if the event propagation needs to be stopped at a point.\nThe default set of interactions, in sequence, is:</p>\n<ul>\n<li>{@link module:ol/interaction/DragRotate~DragRotate}</li>\n<li>{@link module:ol/interaction/DoubleClickZoom~DoubleClickZoom}</li>\n<li>{@link module:ol/interaction/DragPan~DragPan}</li>\n<li>{@link module:ol/interaction/PinchRotate~PinchRotate}</li>\n<li>{@link module:ol/interaction/PinchZoom~PinchZoom}</li>\n<li>{@link module:ol/interaction/KeyboardPan~KeyboardPan}</li>\n<li>{@link module:ol/interaction/KeyboardZoom~KeyboardZoom}</li>\n<li>{@link module:ol/interaction/MouseWheelZoom~MouseWheelZoom}</li>\n<li>{@link module:ol/interaction/DragZoom~DragZoom}</li>\n</ul>",
                "url": "module-ol_interaction#.defaults"
            }
        ],
        "events": []
    },
    {
        "name": "DoubleClickZoom",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#getRevision"
            },
            {
                "name": "on",
                "type": 8,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#on"
            },
            {
                "name": "once",
                "type": 9,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#once"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#set"
            },
            {
                "name": "setActive",
                "type": 11,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#setActive"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#setProperties"
            },
            {
                "name": "un",
                "type": 13,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#un"
            },
            {
                "name": "unset",
                "type": 14,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DoubleClickZoom-DoubleClickZoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DragAndDrop",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragAndDrop-DragAndDrop",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 8,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#handleEvent"
            },
            {
                "name": "on",
                "type": 9,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#on"
            },
            {
                "name": "once",
                "type": 10,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#once"
            },
            {
                "name": "set",
                "type": 11,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#set"
            },
            {
                "name": "setActive",
                "type": 12,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#setActive"
            },
            {
                "name": "setProperties",
                "type": 13,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#setProperties"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DragAndDrop-DragAndDrop#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DragAndDropEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent",
        "members": [
            {
                "name": "features",
                "type": 0,
                "description": "<p>The features parsed from dropped data.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#features"
            },
            {
                "name": "file",
                "type": 1,
                "description": "<p>The dropped file.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#file"
            },
            {
                "name": "projection",
                "type": 2,
                "description": "<p>The feature projection.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#projection"
            },
            {
                "name": "target",
                "type": 3,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#target"
            },
            {
                "name": "type",
                "type": 4,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "addfeatures",
                "type": 0,
                "description": "<p>Triggered when features are added</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#event:addfeatures"
            },
            {
                "name": "change",
                "type": 1,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#event:change"
            },
            {
                "name": "error",
                "type": 2,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_DragAndDrop#.DragAndDropEvent#event:error"
            }
        ]
    },
    {
        "name": "DragBox",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragBox-DragBox",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getActive"
            },
            {
                "name": "getGeometry",
                "type": 4,
                "description": "<p>Returns geometry of last drawn box.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getGeometry"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 7,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 10,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#handleEvent"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#once"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#setActive"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DragBox-DragBox#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DragBox-DragBox#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DragBoxEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragBox#.DragBoxEvent",
        "members": [
            {
                "name": "coordinate",
                "type": 0,
                "description": "<p>The coordinate of the drag event.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#coordinate"
            },
            {
                "name": "mapBrowserEvent",
                "type": 1,
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#mapBrowserEvent"
            },
            {
                "name": "target",
                "type": 2,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#target"
            },
            {
                "name": "type",
                "type": 3,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "boxcancel",
                "type": 0,
                "description": "<p>Triggered upon drag box canceled.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#event:boxcancel"
            },
            {
                "name": "boxdrag",
                "type": 1,
                "description": "<p>Triggered on drag when box is active.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#event:boxdrag"
            },
            {
                "name": "boxend",
                "type": 2,
                "description": "<p>Triggered upon drag box end.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#event:boxend"
            },
            {
                "name": "boxstart",
                "type": 3,
                "description": "<p>Triggered upon drag box start.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#event:boxstart"
            },
            {
                "name": "change",
                "type": 4,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#event:change"
            },
            {
                "name": "error",
                "type": 5,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_DragBox#.DragBoxEvent#event:error"
            }
        ]
    },
    {
        "name": "DragPan",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragPan-DragPan",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 6,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 9,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#handleEvent"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#once"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#set"
            },
            {
                "name": "setActive",
                "type": 13,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#setActive"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DragPan-DragPan#setProperties"
            },
            {
                "name": "un",
                "type": 15,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#un"
            },
            {
                "name": "unset",
                "type": 16,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DragPan-DragPan#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DragRotate",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragRotate-DragRotate",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 6,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 9,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#handleEvent"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#once"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#set"
            },
            {
                "name": "setActive",
                "type": 13,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#setActive"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#setProperties"
            },
            {
                "name": "un",
                "type": 15,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#un"
            },
            {
                "name": "unset",
                "type": 16,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DragRotate-DragRotate#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DragRotateAndZoom",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 6,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 9,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#handleEvent"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#once"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#set"
            },
            {
                "name": "setActive",
                "type": 13,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#setActive"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#setProperties"
            },
            {
                "name": "un",
                "type": 15,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#un"
            },
            {
                "name": "unset",
                "type": 16,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DragZoom",
        "description": "[CLASS]",
        "url": "module-ol_interaction_DragZoom-DragZoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getActive"
            },
            {
                "name": "getGeometry",
                "type": 4,
                "description": "<p>Returns geometry of last drawn box.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getGeometry"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 7,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 10,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#handleEvent"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#once"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#setActive"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_DragZoom-DragZoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Draw",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Draw-Draw",
        "members": [],
        "methods": [
            {
                "name": "abortDrawing",
                "type": 0,
                "description": "<p>Stop drawing without adding the sketch feature to the target layer.</p>",
                "url": "module-ol_interaction_Draw-Draw#abortDrawing"
            },
            {
                "name": "appendCoordinates",
                "type": 1,
                "description": "<p>Append coordinates to the end of the geometry that is currently being drawn.\nThis can be used when drawing LineStrings or Polygons. Coordinates will\neither be appended to the current LineString or the outer ring of the current\nPolygon. If no geometry is being drawn, a new one will be created.</p>",
                "url": "module-ol_interaction_Draw-Draw#appendCoordinates"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Draw-Draw#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 3,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Draw-Draw#dispatchEvent"
            },
            {
                "name": "extend",
                "type": 4,
                "description": "<p>Initiate draw mode by starting from an existing geometry which will\nreceive new additional points. This only works on features with\n<code>LineString</code> geometries, where the interaction will extend lines by adding\npoints to the end of the coordinates array.\nThis will change the original feature, instead of drawing a copy.</p>\n<p>The function will dispatch a <code>drawstart</code> event.</p>",
                "url": "module-ol_interaction_Draw-Draw#extend"
            },
            {
                "name": "finishDrawing",
                "type": 5,
                "description": "<p>Stop drawing and add the sketch feature to the target layer.\nThe {@link module:ol/interaction/Draw~DrawEventType.DRAWEND} event is\ndispatched before inserting the feature.</p>",
                "url": "module-ol_interaction_Draw-Draw#finishDrawing"
            },
            {
                "name": "get",
                "type": 6,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Draw-Draw#get"
            },
            {
                "name": "getActive",
                "type": 7,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Draw-Draw#getActive"
            },
            {
                "name": "getKeys",
                "type": 8,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Draw-Draw#getKeys"
            },
            {
                "name": "getMap",
                "type": 9,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Draw-Draw#getMap"
            },
            {
                "name": "getOverlay",
                "type": 10,
                "description": "<p>Get the overlay layer that this interaction renders sketch features to.</p>",
                "url": "module-ol_interaction_Draw-Draw#getOverlay"
            },
            {
                "name": "getPointerCount",
                "type": 11,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_Draw-Draw#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 12,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Draw-Draw#getProperties"
            },
            {
                "name": "getRevision",
                "type": 13,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Draw-Draw#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 14,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may actually draw or finish the drawing.</p>",
                "url": "module-ol_interaction_Draw-Draw#handleEvent"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Draw-Draw#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Draw-Draw#once"
            },
            {
                "name": "removeLastPoint",
                "type": 17,
                "description": "<p>Remove last point of the feature currently being drawn. Does not do anything when\ndrawing POINT or MULTI_POINT geometries.</p>",
                "url": "module-ol_interaction_Draw-Draw#removeLastPoint"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Draw-Draw#set"
            },
            {
                "name": "setActive",
                "type": 19,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Draw-Draw#setActive"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Draw-Draw#setProperties"
            },
            {
                "name": "un",
                "type": 21,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Draw-Draw#un"
            },
            {
                "name": "unset",
                "type": 22,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Draw-Draw#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/interaction/Draw",
        "description": "[MODULE]",
        "url": "module-ol_interaction_Draw",
        "members": [],
        "methods": [
            {
                "name": "createBox",
                "type": 0,
                "description": "<p>Create a <code>geometryFunction</code> that will create a box-shaped polygon (aligned\nwith the coordinate system axes).  Use this with the draw interaction and\n<code>type: 'Circle'</code> to return a box instead of a circle geometry.</p>",
                "url": "module-ol_interaction_Draw#.createBox"
            },
            {
                "name": "createRegularPolygon",
                "type": 1,
                "description": "<p>Create a <code>geometryFunction</code> for <code>type: 'Circle'</code> that will create a regular\npolygon with a user specified number of sides and start angle instead of a\n{@link module:ol/geom/Circle~Circle} geometry.</p>",
                "url": "module-ol_interaction_Draw#.createRegularPolygon"
            }
        ],
        "events": []
    },
    {
        "name": "DrawEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Draw#.DrawEvent",
        "members": [
            {
                "name": "feature",
                "type": 0,
                "description": "<p>The feature being drawn.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#feature"
            },
            {
                "name": "target",
                "type": 1,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#target"
            },
            {
                "name": "type",
                "type": 2,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#event:change"
            },
            {
                "name": "drawabort",
                "type": 1,
                "description": "<p>Triggered upon feature draw abortion</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#event:drawabort"
            },
            {
                "name": "drawend",
                "type": 2,
                "description": "<p>Triggered upon feature draw end</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#event:drawend"
            },
            {
                "name": "drawstart",
                "type": 3,
                "description": "<p>Triggered upon feature draw start</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#event:drawstart"
            },
            {
                "name": "error",
                "type": 4,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_Draw#.DrawEvent#event:error"
            }
        ]
    },
    {
        "name": "Extent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Extent-Extent",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Extent-Extent#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Extent-Extent#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Extent-Extent#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Extent-Extent#getActive"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Returns the current drawn extent in the view projection (or user projection if set)</p>",
                "url": "module-ol_interaction_Extent-Extent#getExtent"
            },
            {
                "name": "getExtentInternal",
                "type": 5,
                "description": "<p>Returns the current drawn extent in the view projection</p>",
                "url": "module-ol_interaction_Extent-Extent#getExtentInternal"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Extent-Extent#getKeys"
            },
            {
                "name": "getMap",
                "type": 7,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Extent-Extent#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 8,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_Extent-Extent#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Extent-Extent#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Extent-Extent#getRevision"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Extent-Extent#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Extent-Extent#once"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Extent-Extent#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Extent-Extent#setActive"
            },
            {
                "name": "setExtent",
                "type": 15,
                "description": "<p>Manually sets the drawn extent, using the view projection.</p>",
                "url": "module-ol_interaction_Extent-Extent#setExtent"
            },
            {
                "name": "setProperties",
                "type": 16,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Extent-Extent#setProperties"
            },
            {
                "name": "un",
                "type": 17,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Extent-Extent#un"
            },
            {
                "name": "unset",
                "type": 18,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Extent-Extent#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ExtentEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Extent#.ExtentEvent",
        "members": [
            {
                "name": "extent",
                "type": 0,
                "description": "<p>The current extent.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#extent"
            },
            {
                "name": "target",
                "type": 1,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#target"
            },
            {
                "name": "type",
                "type": 2,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#event:error"
            },
            {
                "name": "extentchanged",
                "type": 2,
                "description": "<p>Triggered after the extent is changed</p>",
                "url": "module-ol_interaction_Extent#.ExtentEvent#event:extentchanged"
            }
        ]
    },
    {
        "name": "Interaction",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Interaction-Interaction",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 8,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#handleEvent"
            },
            {
                "name": "on",
                "type": 9,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#on"
            },
            {
                "name": "once",
                "type": 10,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#once"
            },
            {
                "name": "set",
                "type": 11,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#set"
            },
            {
                "name": "setActive",
                "type": 12,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#setActive"
            },
            {
                "name": "setProperties",
                "type": 13,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Interaction-Interaction#setProperties"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Interaction-Interaction#unset"
            }
        ],
        "events": []
    },
    {
        "name": "KeyboardPan",
        "description": "[CLASS]",
        "url": "module-ol_interaction_KeyboardPan-KeyboardPan",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#getRevision"
            },
            {
                "name": "on",
                "type": 8,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#on"
            },
            {
                "name": "once",
                "type": 9,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#once"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#set"
            },
            {
                "name": "setActive",
                "type": 11,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#setActive"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#setProperties"
            },
            {
                "name": "un",
                "type": 13,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#un"
            },
            {
                "name": "unset",
                "type": 14,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_KeyboardPan-KeyboardPan#unset"
            }
        ],
        "events": []
    },
    {
        "name": "KeyboardZoom",
        "description": "[CLASS]",
        "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#getRevision"
            },
            {
                "name": "on",
                "type": 8,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#on"
            },
            {
                "name": "once",
                "type": 9,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#once"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#set"
            },
            {
                "name": "setActive",
                "type": 11,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#setActive"
            },
            {
                "name": "setProperties",
                "type": 12,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#setProperties"
            },
            {
                "name": "un",
                "type": 13,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#un"
            },
            {
                "name": "unset",
                "type": 14,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_KeyboardZoom-KeyboardZoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Link",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Link-Link",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Link-Link#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Link-Link#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Link-Link#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Link-Link#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Link-Link#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Link-Link#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Link-Link#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Link-Link#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 8,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.</p>",
                "url": "module-ol_interaction_Link-Link#handleEvent"
            },
            {
                "name": "on",
                "type": 9,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Link-Link#on"
            },
            {
                "name": "once",
                "type": 10,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Link-Link#once"
            },
            {
                "name": "set",
                "type": 11,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Link-Link#set"
            },
            {
                "name": "setActive",
                "type": 12,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Link-Link#setActive"
            },
            {
                "name": "setProperties",
                "type": 13,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Link-Link#setProperties"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Link-Link#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Link-Link#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Modify",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Modify-Modify",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Modify-Modify#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Modify-Modify#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Modify-Modify#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Modify-Modify#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Modify-Modify#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Modify-Modify#getMap"
            },
            {
                "name": "getOverlay",
                "type": 6,
                "description": "<p>Get the overlay layer that this interaction renders the modification point or vertex to.</p>",
                "url": "module-ol_interaction_Modify-Modify#getOverlay"
            },
            {
                "name": "getPointerCount",
                "type": 7,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_Modify-Modify#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Modify-Modify#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Modify-Modify#getRevision"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Modify-Modify#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Modify-Modify#once"
            },
            {
                "name": "removePoint",
                "type": 12,
                "description": "<p>Removes the vertex currently being pointed.</p>",
                "url": "module-ol_interaction_Modify-Modify#removePoint"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Modify-Modify#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Modify-Modify#setActive"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Modify-Modify#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Modify-Modify#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Modify-Modify#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ModifyEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Modify#.ModifyEvent",
        "members": [
            {
                "name": "features",
                "type": 0,
                "description": "<p>The features being modified.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#features"
            },
            {
                "name": "mapBrowserEvent",
                "type": 1,
                "description": "<p>Associated {@link module:ol/MapBrowserEvent~MapBrowserEvent}.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#mapBrowserEvent"
            },
            {
                "name": "target",
                "type": 2,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#target"
            },
            {
                "name": "type",
                "type": 3,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#event:error"
            },
            {
                "name": "modifyend",
                "type": 2,
                "description": "<p>Triggered upon feature modification end</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#event:modifyend"
            },
            {
                "name": "modifystart",
                "type": 3,
                "description": "<p>Triggered upon feature modification start</p>",
                "url": "module-ol_interaction_Modify#.ModifyEvent#event:modifystart"
            }
        ]
    },
    {
        "name": "MouseWheelZoom",
        "description": "[CLASS]",
        "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#getMap"
            },
            {
                "name": "getProperties",
                "type": 6,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 7,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#getRevision"
            },
            {
                "name": "on",
                "type": 8,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#on"
            },
            {
                "name": "once",
                "type": 9,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#once"
            },
            {
                "name": "set",
                "type": 10,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#set"
            },
            {
                "name": "setActive",
                "type": 11,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#setActive"
            },
            {
                "name": "setMouseAnchor",
                "type": 12,
                "description": "<p>Enable or disable using the mouse's location as an anchor when zooming</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#setMouseAnchor"
            },
            {
                "name": "setProperties",
                "type": 13,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#setProperties"
            },
            {
                "name": "un",
                "type": 14,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#un"
            },
            {
                "name": "unset",
                "type": 15,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_MouseWheelZoom-MouseWheelZoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/interaction/MouseWheelZoom",
        "description": "[MODULE]",
        "url": "module-ol_interaction_MouseWheelZoom",
        "members": [
            {
                "name": "Mode",
                "type": 0,
                "url": "module-ol_interaction_MouseWheelZoom#.Mode"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "PinchRotate",
        "description": "[CLASS]",
        "url": "module-ol_interaction_PinchRotate-PinchRotate",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 6,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 9,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#handleEvent"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#once"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#set"
            },
            {
                "name": "setActive",
                "type": 13,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#setActive"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#setProperties"
            },
            {
                "name": "un",
                "type": 15,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#un"
            },
            {
                "name": "unset",
                "type": 16,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_PinchRotate-PinchRotate#unset"
            }
        ],
        "events": []
    },
    {
        "name": "PinchZoom",
        "description": "[CLASS]",
        "url": "module-ol_interaction_PinchZoom-PinchZoom",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 6,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 9,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#handleEvent"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#once"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#set"
            },
            {
                "name": "setActive",
                "type": 13,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#setActive"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#setProperties"
            },
            {
                "name": "un",
                "type": 15,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#un"
            },
            {
                "name": "unset",
                "type": 16,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_PinchZoom-PinchZoom#unset"
            }
        ],
        "events": []
    },
    {
        "name": "PointerInteraction",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Pointer-PointerInteraction",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#getActive"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#getKeys"
            },
            {
                "name": "getMap",
                "type": 5,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 6,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 9,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#handleEvent"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#once"
            },
            {
                "name": "set",
                "type": 12,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#set"
            },
            {
                "name": "setActive",
                "type": 13,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#setActive"
            },
            {
                "name": "setProperties",
                "type": 14,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#setProperties"
            },
            {
                "name": "un",
                "type": 15,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#un"
            },
            {
                "name": "unset",
                "type": 16,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Pointer-PointerInteraction#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Select",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Select-Select",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Select-Select#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Select-Select#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Select-Select#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Select-Select#getActive"
            },
            {
                "name": "getFeatures",
                "type": 4,
                "description": "<p>Get the selected features.</p>",
                "url": "module-ol_interaction_Select-Select#getFeatures"
            },
            {
                "name": "getHitTolerance",
                "type": 5,
                "description": "<p>Returns the Hit-detection tolerance.</p>",
                "url": "module-ol_interaction_Select-Select#getHitTolerance"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Select-Select#getKeys"
            },
            {
                "name": "getLayer",
                "type": 7,
                "description": "<p>Returns the associated {@link module:ol/layer/Vector~VectorLayer vector layer} of\na selected feature.</p>",
                "url": "module-ol_interaction_Select-Select#getLayer"
            },
            {
                "name": "getMap",
                "type": 8,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Select-Select#getMap"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Select-Select#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Select-Select#getRevision"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Select-Select#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Select-Select#once"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Select-Select#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Select-Select#setActive"
            },
            {
                "name": "setHitTolerance",
                "type": 15,
                "description": "<p>Hit-detection tolerance. Pixels inside the radius around the given position\nwill be checked for features.</p>",
                "url": "module-ol_interaction_Select-Select#setHitTolerance"
            },
            {
                "name": "setMap",
                "type": 16,
                "description": "<p>Remove the interaction from its current map, if any,  and attach it to a new\nmap, if any. Pass <code>null</code> to just remove the interaction from the current map.</p>",
                "url": "module-ol_interaction_Select-Select#setMap"
            },
            {
                "name": "setProperties",
                "type": 17,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Select-Select#setProperties"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Select-Select#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Select-Select#unset"
            }
        ],
        "events": []
    },
    {
        "name": "SelectEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Select#.SelectEvent",
        "members": [
            {
                "name": "deselected",
                "type": 0,
                "description": "<p>Deselected features array.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#deselected"
            },
            {
                "name": "mapBrowserEvent",
                "type": 1,
                "description": "<p>Associated {@link module:ol/MapBrowserEvent~MapBrowserEvent}.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#mapBrowserEvent"
            },
            {
                "name": "selected",
                "type": 2,
                "description": "<p>Selected features array.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#selected"
            },
            {
                "name": "target",
                "type": 3,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#target"
            },
            {
                "name": "type",
                "type": 4,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#event:error"
            },
            {
                "name": "select",
                "type": 2,
                "description": "<p>Triggered when feature(s) has been (de)selected.</p>",
                "url": "module-ol_interaction_Select#.SelectEvent#event:select"
            }
        ]
    },
    {
        "name": "Snap",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Snap-Snap",
        "members": [],
        "methods": [
            {
                "name": "addFeature",
                "type": 0,
                "description": "<p>Add a feature to the collection of features that we may snap to.</p>",
                "url": "module-ol_interaction_Snap-Snap#addFeature"
            },
            {
                "name": "changed",
                "type": 1,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Snap-Snap#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Snap-Snap#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Snap-Snap#get"
            },
            {
                "name": "getActive",
                "type": 4,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Snap-Snap#getActive"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Snap-Snap#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Snap-Snap#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 7,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_Snap-Snap#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Snap-Snap#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Snap-Snap#getRevision"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Snap-Snap#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Snap-Snap#once"
            },
            {
                "name": "removeFeature",
                "type": 12,
                "description": "<p>Remove a feature from the collection of features that we may snap to.</p>",
                "url": "module-ol_interaction_Snap-Snap#removeFeature"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Snap-Snap#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Snap-Snap#setActive"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Snap-Snap#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Snap-Snap#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Snap-Snap#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/interaction/Snap",
        "description": "[MODULE]",
        "url": "module-ol_interaction_Snap",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Translate",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Translate-Translate",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_interaction_Translate-Translate#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_interaction_Translate-Translate#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_interaction_Translate-Translate#get"
            },
            {
                "name": "getActive",
                "type": 3,
                "description": "<p>Return whether the interaction is currently active.</p>",
                "url": "module-ol_interaction_Translate-Translate#getActive"
            },
            {
                "name": "getHitTolerance",
                "type": 4,
                "description": "<p>Returns the Hit-detection tolerance.</p>",
                "url": "module-ol_interaction_Translate-Translate#getHitTolerance"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_interaction_Translate-Translate#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this interaction.</p>",
                "url": "module-ol_interaction_Translate-Translate#getMap"
            },
            {
                "name": "getPointerCount",
                "type": 7,
                "description": "<p>Returns the current number of pointers involved in the interaction,\ne.g. <code>2</code> when two fingers are used.</p>",
                "url": "module-ol_interaction_Translate-Translate#getPointerCount"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_interaction_Translate-Translate#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_interaction_Translate-Translate#getRevision"
            },
            {
                "name": "handleEvent",
                "type": 10,
                "description": "<p>Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into\nother functions, if event sequences like e.g. 'drag' or 'down-up' etc. are\ndetected.</p>",
                "url": "module-ol_interaction_Translate-Translate#handleEvent"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_interaction_Translate-Translate#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_interaction_Translate-Translate#once"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_interaction_Translate-Translate#set"
            },
            {
                "name": "setActive",
                "type": 14,
                "description": "<p>Activate or deactivate the interaction.</p>",
                "url": "module-ol_interaction_Translate-Translate#setActive"
            },
            {
                "name": "setHitTolerance",
                "type": 15,
                "description": "<p>Hit-detection tolerance. Pixels inside the radius around the given position\nwill be checked for features.</p>",
                "url": "module-ol_interaction_Translate-Translate#setHitTolerance"
            },
            {
                "name": "setProperties",
                "type": 16,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_interaction_Translate-Translate#setProperties"
            },
            {
                "name": "un",
                "type": 17,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_interaction_Translate-Translate#un"
            },
            {
                "name": "unset",
                "type": 18,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_interaction_Translate-Translate#unset"
            }
        ],
        "events": []
    },
    {
        "name": "TranslateEvent",
        "description": "[CLASS]",
        "url": "module-ol_interaction_Translate#.TranslateEvent",
        "members": [
            {
                "name": "coordinate",
                "type": 0,
                "description": "<p>The coordinate of the drag event.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#coordinate"
            },
            {
                "name": "features",
                "type": 1,
                "description": "<p>The features being translated.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#features"
            },
            {
                "name": "mapBrowserEvent",
                "type": 2,
                "description": "<p>Associated {@link module:ol/MapBrowserEvent~MapBrowserEvent}.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#mapBrowserEvent"
            },
            {
                "name": "startCoordinate",
                "type": 3,
                "description": "<p>The coordinate of the start position before translation started.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#startCoordinate"
            },
            {
                "name": "target",
                "type": 4,
                "description": "<p>The event target.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#target"
            },
            {
                "name": "type",
                "type": 5,
                "description": "<p>The event type.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#event:error"
            },
            {
                "name": "translateend",
                "type": 2,
                "description": "<p>Triggered upon feature translation end.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#event:translateend"
            },
            {
                "name": "translatestart",
                "type": 3,
                "description": "<p>Triggered upon feature translation start.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#event:translatestart"
            },
            {
                "name": "translating",
                "type": 4,
                "description": "<p>Triggered upon feature translation.</p>",
                "url": "module-ol_interaction_Translate#.TranslateEvent#event:translating"
            }
        ]
    },
    {
        "name": "Kinetic",
        "description": "[CLASS]",
        "url": "module-ol_Kinetic-Kinetic",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "BaseLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_Base-BaseLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Base-BaseLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Base-BaseLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Base-BaseLayer#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 5,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 6,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 7,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 8,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 9,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Base-BaseLayer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 10,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 11,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getRevision"
            },
            {
                "name": "getVisible",
                "type": 12,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Base-BaseLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 13,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Base-BaseLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 14,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Base-BaseLayer#on"
            },
            {
                "name": "once",
                "type": 15,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Base-BaseLayer#once"
            },
            {
                "name": "set",
                "type": 16,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Base-BaseLayer#set"
            },
            {
                "name": "setExtent",
                "type": 17,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setExtent"
            },
            {
                "name": "setMaxResolution",
                "type": 18,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 19,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 20,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 21,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 22,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 23,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Base-BaseLayer#setProperties"
            },
            {
                "name": "setVisible",
                "type": 24,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Base-BaseLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 25,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Base-BaseLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 26,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Base-BaseLayer#un"
            },
            {
                "name": "unset",
                "type": 27,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Base-BaseLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/layer/Base",
        "description": "[MODULE]",
        "url": "module-ol_layer_Base",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "BaseImageLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_BaseImage-BaseImageLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 5,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 6,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 7,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 8,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 9,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 10,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 11,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 12,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getSource"
            },
            {
                "name": "getVisible",
                "type": 13,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 14,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#once"
            },
            {
                "name": "set",
                "type": 17,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#set"
            },
            {
                "name": "setExtent",
                "type": 18,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 19,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 20,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 21,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 22,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 23,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 24,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 25,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 26,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setSource"
            },
            {
                "name": "setVisible",
                "type": 27,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 28,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 29,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#un"
            },
            {
                "name": "unset",
                "type": 30,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_BaseImage-BaseImageLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "BaseTileLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_BaseTile-BaseTileLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#get"
            },
            {
                "name": "getData",
                "type": 3,
                "description": "<p>Get data for a pixel location.  The return type depends on the source data.  For image tiles,\na four element RGBA array will be returned.  For data tiles, the array length will match the\nnumber of bands in the dataset.  For requests outside the layer extent, <code>null</code> will be returned.\nData for a image tiles can only be retrieved if the source's <code>crossOrigin</code> property is set.</p>\n<pre class=\"prettyprint source lang-js\"><code>// display layer data on every pointer move\nmap.on('pointermove', (event) => {\n  console.log(layer.getData(event.pixel));\n});</code></pre>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getData"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getOpacity"
            },
            {
                "name": "getPreload",
                "type": 11,
                "description": "<p>Return the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getPreload"
            },
            {
                "name": "getProperties",
                "type": 12,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 13,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 14,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getSource"
            },
            {
                "name": "getUseInterimTilesOnError",
                "type": 15,
                "description": "<p>Whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getUseInterimTilesOnError"
            },
            {
                "name": "getVisible",
                "type": 16,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 17,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#once"
            },
            {
                "name": "set",
                "type": 20,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#set"
            },
            {
                "name": "setExtent",
                "type": 21,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 22,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 23,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 24,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 25,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 26,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 27,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setOpacity"
            },
            {
                "name": "setPreload",
                "type": 28,
                "description": "<p>Set the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setPreload"
            },
            {
                "name": "setProperties",
                "type": 29,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 30,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setSource"
            },
            {
                "name": "setUseInterimTilesOnError",
                "type": 31,
                "description": "<p>Set whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setUseInterimTilesOnError"
            },
            {
                "name": "setVisible",
                "type": 32,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 33,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 34,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#un"
            },
            {
                "name": "unset",
                "type": 35,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_BaseTile-BaseTileLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "BaseVectorLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_BaseVector-BaseVectorLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 4,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getFeatures"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 13,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getSource"
            },
            {
                "name": "getStyle",
                "type": 14,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 15,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getStyleFunction"
            },
            {
                "name": "getVisible",
                "type": 16,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 17,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#once"
            },
            {
                "name": "set",
                "type": 20,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#set"
            },
            {
                "name": "setExtent",
                "type": 21,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 22,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 23,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 24,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 25,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 26,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 27,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 28,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 29,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setSource"
            },
            {
                "name": "setStyle",
                "type": 30,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setStyle"
            },
            {
                "name": "setVisible",
                "type": 31,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 32,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 33,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#un"
            },
            {
                "name": "unset",
                "type": 34,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_BaseVector-BaseVectorLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Graticule",
        "description": "[CLASS]",
        "url": "module-ol_layer_Graticule-Graticule",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Graticule-Graticule#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Graticule-Graticule#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Graticule-Graticule#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 4,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getFeatures"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getMaxZoom"
            },
            {
                "name": "getMeridians",
                "type": 8,
                "description": "<p>Get the list of meridians.  Meridians are lines of equal longitude.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getMeridians"
            },
            {
                "name": "getMinResolution",
                "type": 9,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 10,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 11,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Graticule-Graticule#getOpacity"
            },
            {
                "name": "getParallels",
                "type": 12,
                "description": "<p>Get the list of parallels.  Parallels are lines of equal latitude.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getParallels"
            },
            {
                "name": "getProperties",
                "type": 13,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getProperties"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getRevision"
            },
            {
                "name": "getSource",
                "type": 15,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getSource"
            },
            {
                "name": "getStyle",
                "type": 16,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 17,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getStyleFunction"
            },
            {
                "name": "getVisible",
                "type": 18,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Graticule-Graticule#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 19,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Graticule-Graticule#getZIndex"
            },
            {
                "name": "on",
                "type": 20,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Graticule-Graticule#on"
            },
            {
                "name": "once",
                "type": 21,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Graticule-Graticule#once"
            },
            {
                "name": "set",
                "type": 22,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Graticule-Graticule#set"
            },
            {
                "name": "setExtent",
                "type": 23,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setExtent"
            },
            {
                "name": "setMap",
                "type": 24,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 25,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 26,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 27,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 28,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 29,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 30,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Graticule-Graticule#setProperties"
            },
            {
                "name": "setSource",
                "type": 31,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setSource"
            },
            {
                "name": "setStyle",
                "type": 32,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setStyle"
            },
            {
                "name": "setVisible",
                "type": 33,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Graticule-Graticule#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 34,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Graticule-Graticule#setZIndex"
            },
            {
                "name": "un",
                "type": 35,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Graticule-Graticule#un"
            },
            {
                "name": "unset",
                "type": 36,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Graticule-Graticule#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/layer/Graticule",
        "description": "[MODULE]",
        "url": "module-ol_layer_Graticule",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "LayerGroup",
        "description": "[CLASS]",
        "url": "module-ol_layer_Group-LayerGroup",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Group-LayerGroup#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Group-LayerGroup#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Group-LayerGroup#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getExtent"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getKeys"
            },
            {
                "name": "getLayers",
                "type": 5,
                "description": "<p>Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}\nin this group.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getLayers"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Group-LayerGroup#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getRevision"
            },
            {
                "name": "getVisible",
                "type": 13,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Group-LayerGroup#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 14,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Group-LayerGroup#getZIndex"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Group-LayerGroup#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Group-LayerGroup#once"
            },
            {
                "name": "set",
                "type": 17,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Group-LayerGroup#set"
            },
            {
                "name": "setExtent",
                "type": 18,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setExtent"
            },
            {
                "name": "setLayers",
                "type": 19,
                "description": "<p>Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}\nin this group.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setLayers"
            },
            {
                "name": "setMaxResolution",
                "type": 20,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 21,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 22,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 23,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 24,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 25,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Group-LayerGroup#setProperties"
            },
            {
                "name": "setVisible",
                "type": 26,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Group-LayerGroup#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 27,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Group-LayerGroup#setZIndex"
            },
            {
                "name": "un",
                "type": 28,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Group-LayerGroup#un"
            },
            {
                "name": "unset",
                "type": 29,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Group-LayerGroup#unset"
            }
        ],
        "events": []
    },
    {
        "name": "GroupEvent",
        "description": "[CLASS]",
        "url": "module-ol_layer_Group#.GroupEvent",
        "members": [
            {
                "name": "layer",
                "type": 0,
                "description": "<p>The added or removed layer.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#layer"
            },
            {
                "name": "target",
                "type": 1,
                "description": "<p>The event target.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#target"
            },
            {
                "name": "type",
                "type": 2,
                "description": "<p>The event type.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_layer_Group#.GroupEvent#event:error"
            }
        ]
    },
    {
        "name": "Heatmap",
        "description": "[CLASS]",
        "url": "module-ol_layer_Heatmap-Heatmap",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#get"
            },
            {
                "name": "getBlur",
                "type": 3,
                "description": "<p>Return the blur size in pixels.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getBlur"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 5,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getFeatures"
            },
            {
                "name": "getGradient",
                "type": 6,
                "description": "<p>Return the gradient colors as array of strings.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getGradient"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 8,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 9,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 10,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 11,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 12,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 13,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getProperties"
            },
            {
                "name": "getRadius",
                "type": 14,
                "description": "<p>Return the size of the radius in pixels.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getRadius"
            },
            {
                "name": "getRevision",
                "type": 15,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getRevision"
            },
            {
                "name": "getSource",
                "type": 16,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getSource"
            },
            {
                "name": "getStyle",
                "type": 17,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 18,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getStyleFunction"
            },
            {
                "name": "getVisible",
                "type": 19,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 20,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#getZIndex"
            },
            {
                "name": "on",
                "type": 21,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#on"
            },
            {
                "name": "once",
                "type": 22,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#once"
            },
            {
                "name": "set",
                "type": 23,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#set"
            },
            {
                "name": "setBlur",
                "type": 24,
                "description": "<p>Set the blur size in pixels.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setBlur"
            },
            {
                "name": "setExtent",
                "type": 25,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setExtent"
            },
            {
                "name": "setGradient",
                "type": 26,
                "description": "<p>Set the gradient colors as array of strings.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setGradient"
            },
            {
                "name": "setMap",
                "type": 27,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 28,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 29,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 30,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 31,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 32,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 33,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setProperties"
            },
            {
                "name": "setRadius",
                "type": 34,
                "description": "<p>Set the size of the radius in pixels.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setRadius"
            },
            {
                "name": "setSource",
                "type": 35,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setSource"
            },
            {
                "name": "setStyle",
                "type": 36,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setStyle"
            },
            {
                "name": "setVisible",
                "type": 37,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 38,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#setZIndex"
            },
            {
                "name": "un",
                "type": 39,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#un"
            },
            {
                "name": "unset",
                "type": 40,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Heatmap-Heatmap#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ImageLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_Image-ImageLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Image-ImageLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Image-ImageLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Image-ImageLayer#get"
            },
            {
                "name": "getData",
                "type": 3,
                "description": "<p>Get data for a pixel location.  A four element RGBA array will be returned.  For requests outside the\nlayer extent, <code>null</code> will be returned.  Data for an image can only be retrieved if the\nsource's <code>crossOrigin</code> property is set.</p>\n<pre class=\"prettyprint source lang-js\"><code>// display layer data on every pointer move\nmap.on('pointermove', (event) => {\n  console.log(layer.getData(event.pixel));\n});</code></pre>",
                "url": "module-ol_layer_Image-ImageLayer#getData"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Image-ImageLayer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 13,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getSource"
            },
            {
                "name": "getVisible",
                "type": 14,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Image-ImageLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 15,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Image-ImageLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 16,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Image-ImageLayer#on"
            },
            {
                "name": "once",
                "type": 17,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Image-ImageLayer#once"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Image-ImageLayer#set"
            },
            {
                "name": "setExtent",
                "type": 19,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 20,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 21,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 22,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 23,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 24,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 25,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 26,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Image-ImageLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 27,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setSource"
            },
            {
                "name": "setVisible",
                "type": 28,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Image-ImageLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 29,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Image-ImageLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 30,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Image-ImageLayer#un"
            },
            {
                "name": "unset",
                "type": 31,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Image-ImageLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Layer",
        "description": "[CLASS]",
        "url": "module-ol_layer_Layer-Layer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Layer-Layer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Layer-Layer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Layer-Layer#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Layer-Layer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 4,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Layer-Layer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 5,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Layer-Layer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 6,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Layer-Layer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 7,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Layer-Layer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 8,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Layer-Layer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 9,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Layer-Layer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 10,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Layer-Layer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 11,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Layer-Layer#getRevision"
            },
            {
                "name": "getSource",
                "type": 12,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_Layer-Layer#getSource"
            },
            {
                "name": "getVisible",
                "type": 13,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Layer-Layer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 14,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Layer-Layer#getZIndex"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Layer-Layer#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Layer-Layer#once"
            },
            {
                "name": "set",
                "type": 17,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Layer-Layer#set"
            },
            {
                "name": "setExtent",
                "type": 18,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Layer-Layer#setExtent"
            },
            {
                "name": "setMap",
                "type": 19,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_Layer-Layer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 20,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Layer-Layer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 21,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Layer-Layer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 22,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Layer-Layer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 23,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Layer-Layer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 24,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Layer-Layer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 25,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Layer-Layer#setProperties"
            },
            {
                "name": "setSource",
                "type": 26,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_Layer-Layer#setSource"
            },
            {
                "name": "setVisible",
                "type": 27,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Layer-Layer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 28,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Layer-Layer#setZIndex"
            },
            {
                "name": "un",
                "type": 29,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Layer-Layer#un"
            },
            {
                "name": "unset",
                "type": 30,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Layer-Layer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/layer/Layer",
        "description": "[MODULE]",
        "url": "module-ol_layer_Layer",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "MapboxVectorLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_MapboxVector-MapboxVectorLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#get"
            },
            {
                "name": "getBackground",
                "type": 3,
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getBackground"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 5,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel map.getFeaturesAtPixel()}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getFeatures"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 7,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 8,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 9,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 10,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 11,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getOpacity"
            },
            {
                "name": "getPreload",
                "type": 12,
                "description": "<p>Return the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getPreload"
            },
            {
                "name": "getProperties",
                "type": 13,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 15,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getSource"
            },
            {
                "name": "getStyle",
                "type": 16,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 17,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getStyleFunction"
            },
            {
                "name": "getUseInterimTilesOnError",
                "type": 18,
                "description": "<p>Whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getUseInterimTilesOnError"
            },
            {
                "name": "getVisible",
                "type": 19,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 20,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 21,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#on"
            },
            {
                "name": "once",
                "type": 22,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#once"
            },
            {
                "name": "set",
                "type": 23,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#set"
            },
            {
                "name": "setBackground",
                "type": 24,
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setBackground"
            },
            {
                "name": "setExtent",
                "type": 25,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 26,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 27,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 28,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 29,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 30,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 31,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setOpacity"
            },
            {
                "name": "setPreload",
                "type": 32,
                "description": "<p>Set the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setPreload"
            },
            {
                "name": "setProperties",
                "type": 33,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 34,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setSource"
            },
            {
                "name": "setStyle",
                "type": 35,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setStyle"
            },
            {
                "name": "setUseInterimTilesOnError",
                "type": 36,
                "description": "<p>Set whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setUseInterimTilesOnError"
            },
            {
                "name": "setVisible",
                "type": 37,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 38,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 39,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#un"
            },
            {
                "name": "unset",
                "type": 40,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_MapboxVector-MapboxVectorLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "TileLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_Tile-TileLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Tile-TileLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Tile-TileLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Tile-TileLayer#get"
            },
            {
                "name": "getData",
                "type": 3,
                "description": "<p>Get data for a pixel location.  The return type depends on the source data.  For image tiles,\na four element RGBA array will be returned.  For data tiles, the array length will match the\nnumber of bands in the dataset.  For requests outside the layer extent, <code>null</code> will be returned.\nData for a image tiles can only be retrieved if the source's <code>crossOrigin</code> property is set.</p>\n<pre class=\"prettyprint source lang-js\"><code>// display layer data on every pointer move\nmap.on('pointermove', (event) => {\n  console.log(layer.getData(event.pixel));\n});</code></pre>",
                "url": "module-ol_layer_Tile-TileLayer#getData"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Tile-TileLayer#getOpacity"
            },
            {
                "name": "getPreload",
                "type": 11,
                "description": "<p>Return the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getPreload"
            },
            {
                "name": "getProperties",
                "type": 12,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 13,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 14,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getSource"
            },
            {
                "name": "getUseInterimTilesOnError",
                "type": 15,
                "description": "<p>Whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getUseInterimTilesOnError"
            },
            {
                "name": "getVisible",
                "type": 16,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Tile-TileLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 17,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Tile-TileLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Tile-TileLayer#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Tile-TileLayer#once"
            },
            {
                "name": "set",
                "type": 20,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Tile-TileLayer#set"
            },
            {
                "name": "setExtent",
                "type": 21,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 22,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 23,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 24,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 25,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 26,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 27,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setOpacity"
            },
            {
                "name": "setPreload",
                "type": 28,
                "description": "<p>Set the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setPreload"
            },
            {
                "name": "setProperties",
                "type": 29,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Tile-TileLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 30,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setSource"
            },
            {
                "name": "setUseInterimTilesOnError",
                "type": 31,
                "description": "<p>Set whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setUseInterimTilesOnError"
            },
            {
                "name": "setVisible",
                "type": 32,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Tile-TileLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 33,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Tile-TileLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 34,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Tile-TileLayer#un"
            },
            {
                "name": "unset",
                "type": 35,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Tile-TileLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "VectorLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_Vector-VectorLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 4,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getFeatures"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 13,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getSource"
            },
            {
                "name": "getStyle",
                "type": 14,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 15,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getStyleFunction"
            },
            {
                "name": "getVisible",
                "type": 16,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 17,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#once"
            },
            {
                "name": "set",
                "type": 20,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#set"
            },
            {
                "name": "setExtent",
                "type": 21,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 22,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 23,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 24,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 25,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 26,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 27,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 28,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 29,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setSource"
            },
            {
                "name": "setStyle",
                "type": 30,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setStyle"
            },
            {
                "name": "setVisible",
                "type": 31,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 32,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 33,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#un"
            },
            {
                "name": "unset",
                "type": 34,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_Vector-VectorLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "VectorImageLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_VectorImage-VectorImageLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#get"
            },
            {
                "name": "getExtent",
                "type": 3,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 4,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getFeatures"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 6,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 7,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 8,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 9,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 10,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getOpacity"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 13,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getSource"
            },
            {
                "name": "getStyle",
                "type": 14,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 15,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getStyleFunction"
            },
            {
                "name": "getVisible",
                "type": 16,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 17,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#once"
            },
            {
                "name": "set",
                "type": 20,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#set"
            },
            {
                "name": "setExtent",
                "type": 21,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 22,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 23,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 24,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 25,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 26,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 27,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setOpacity"
            },
            {
                "name": "setProperties",
                "type": 28,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 29,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setSource"
            },
            {
                "name": "setStyle",
                "type": 30,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setStyle"
            },
            {
                "name": "setVisible",
                "type": 31,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 32,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 33,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#un"
            },
            {
                "name": "unset",
                "type": 34,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_VectorImage-VectorImageLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "VectorTileLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_VectorTile-VectorTileLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#get"
            },
            {
                "name": "getBackground",
                "type": 3,
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getBackground"
            },
            {
                "name": "getExtent",
                "type": 4,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getExtent"
            },
            {
                "name": "getFeatures",
                "type": 5,
                "description": "<p>Get the topmost feature that intersects the given pixel on the viewport. Returns a promise\nthat resolves with an array of features. The array will either contain the topmost feature\nwhen a hit was detected, or it will be empty.</p>\n<p>The hit detection algorithm used for this method is optimized for performance, but is less\naccurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel map.getFeaturesAtPixel()}: Text\nis not considered, and icons are only represented by their bounding box instead of the exact\nimage.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getFeatures"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 7,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 8,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 9,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 10,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 11,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getOpacity"
            },
            {
                "name": "getPreload",
                "type": 12,
                "description": "<p>Return the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getPreload"
            },
            {
                "name": "getProperties",
                "type": 13,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 15,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getSource"
            },
            {
                "name": "getStyle",
                "type": 16,
                "description": "<p>Get the style for features.  This returns whatever was passed to the <code>style</code>\noption at construction or to the <code>setStyle</code> method.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getStyle"
            },
            {
                "name": "getStyleFunction",
                "type": 17,
                "description": "<p>Get the style function.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getStyleFunction"
            },
            {
                "name": "getUseInterimTilesOnError",
                "type": 18,
                "description": "<p>Whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getUseInterimTilesOnError"
            },
            {
                "name": "getVisible",
                "type": 19,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 20,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 21,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#on"
            },
            {
                "name": "once",
                "type": 22,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#once"
            },
            {
                "name": "set",
                "type": 23,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#set"
            },
            {
                "name": "setBackground",
                "type": 24,
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setBackground"
            },
            {
                "name": "setExtent",
                "type": 25,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 26,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 27,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 28,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 29,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 30,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 31,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setOpacity"
            },
            {
                "name": "setPreload",
                "type": 32,
                "description": "<p>Set the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setPreload"
            },
            {
                "name": "setProperties",
                "type": 33,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 34,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setSource"
            },
            {
                "name": "setStyle",
                "type": 35,
                "description": "<p>Set the style for features.  This can be a single style object, an array\nof styles, or a function that takes a feature and resolution and returns\nan array of styles. If set to <code>null</code>, the layer has no style (a <code>null</code> style),\nso only features that have their own styles will be rendered in the layer. Call\n<code>setStyle()</code> without arguments to reset to the default style. See\n{@link module:ol/style/Style~Style} for information on the default style.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setStyle"
            },
            {
                "name": "setUseInterimTilesOnError",
                "type": 36,
                "description": "<p>Set whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setUseInterimTilesOnError"
            },
            {
                "name": "setVisible",
                "type": 37,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 38,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 39,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#un"
            },
            {
                "name": "unset",
                "type": 40,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_VectorTile-VectorTileLayer#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/layer/VectorTileRenderType",
        "description": "[MODULE]",
        "url": "module-ol_layer_VectorTileRenderType",
        "members": [
            {
                "name": "module:ol/layer/VectorTileRenderType",
                "type": 0,
                "description": "<p>Render mode for vector tiles:</p>",
                "url": "module-ol_layer_VectorTileRenderType"
            },
            {
                "name": "HYBRID",
                "type": 1,
                "description": "<p>Polygon and line elements are rendered as images, so pixels\nare scaled during zoom animations. Point symbols and texts are accurately\nrendered as vectors and can stay upright on rotated views.</p>",
                "url": "module-ol_layer_VectorTileRenderType#.HYBRID"
            },
            {
                "name": "IMAGE",
                "type": 2,
                "description": "<p>Vector tiles are rendered as images. Great performance, but\npoint symbols and texts are always rotated with the view and pixels are\nscaled during zoom animations</p>",
                "url": "module-ol_layer_VectorTileRenderType#.IMAGE"
            },
            {
                "name": "VECTOR",
                "type": 3,
                "description": "<p>Everything is rendered as vectors. Use this mode for improved\nperformance on vector tile layers with only a few rendered features (e.g.\nfor highlighting a subset of features of another layer with the same\nsource).</p>",
                "url": "module-ol_layer_VectorTileRenderType#.VECTOR"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "WebGLTileLayer",
        "description": "[CLASS]",
        "url": "module-ol_layer_WebGLTile-WebGLTileLayer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#dispatchEvent"
            },
            {
                "name": "dispose",
                "type": 2,
                "description": "<p>Clean up underlying WebGL resources.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#dispose"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#get"
            },
            {
                "name": "getData",
                "type": 4,
                "description": "<p>Get data for a pixel location.  The return type depends on the source data.  For image tiles,\na four element RGBA array will be returned.  For data tiles, the array length will match the\nnumber of bands in the dataset.  For requests outside the layer extent, <code>null</code> will be returned.\nData for a image tiles can only be retrieved if the source's <code>crossOrigin</code> property is set.</p>\n<pre class=\"prettyprint source lang-js\"><code>// display layer data on every pointer move\nmap.on('pointermove', (event) => {\n  console.log(layer.getData(event.pixel));\n});</code></pre>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getData"
            },
            {
                "name": "getExtent",
                "type": 5,
                "description": "<p>Return the {@link module:ol/extent~Extent extent} of the layer or <code>undefined</code> if it\nwill be visible regardless of extent.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getExtent"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 7,
                "description": "<p>Return the maximum resolution of the layer.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 8,
                "description": "<p>Return the maximum zoom level of the layer.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 9,
                "description": "<p>Return the minimum resolution of the layer.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 10,
                "description": "<p>Return the minimum zoom level of the layer.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getMinZoom"
            },
            {
                "name": "getOpacity",
                "type": 11,
                "description": "<p>Return the opacity of the layer (between 0 and 1).</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getOpacity"
            },
            {
                "name": "getPreload",
                "type": 12,
                "description": "<p>Return the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getPreload"
            },
            {
                "name": "getProperties",
                "type": 13,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getProperties"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getRevision"
            },
            {
                "name": "getSource",
                "type": 15,
                "description": "<p>Get the layer source.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getSource"
            },
            {
                "name": "getUseInterimTilesOnError",
                "type": 16,
                "description": "<p>Whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getUseInterimTilesOnError"
            },
            {
                "name": "getVisible",
                "type": 17,
                "description": "<p>Return the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getVisible"
            },
            {
                "name": "getZIndex",
                "type": 18,
                "description": "<p>Return the Z-index of the layer, which is used to order layers before\nrendering. The default Z-index is 0.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#getZIndex"
            },
            {
                "name": "on",
                "type": 19,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#on"
            },
            {
                "name": "once",
                "type": 20,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#once"
            },
            {
                "name": "set",
                "type": 21,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#set"
            },
            {
                "name": "setExtent",
                "type": 22,
                "description": "<p>Set the extent at which the layer is visible.  If <code>undefined</code>, the layer\nwill be visible at all extents.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setExtent"
            },
            {
                "name": "setMap",
                "type": 23,
                "description": "<p>Sets the layer to be rendered on top of other layers on a map. The map will\nnot manage this layer in its layers collection, and the callback in\n{@link module:ol/Map~Map#forEachLayerAtPixel} will receive <code>null</code> as layer. This\nis useful for temporary layers. To remove an unmanaged layer from the map,\nuse <code>#setMap(null)</code>.</p>\n<p>To add the layer to a map and have it managed by the map, use\n{@link module:ol/Map~Map#addLayer} instead.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setMap"
            },
            {
                "name": "setMaxResolution",
                "type": 24,
                "description": "<p>Set the maximum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setMaxResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 25,
                "description": "<p>Set the maximum zoom (exclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setMaxZoom"
            },
            {
                "name": "setMinResolution",
                "type": 26,
                "description": "<p>Set the minimum resolution at which the layer is visible.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setMinResolution"
            },
            {
                "name": "setMinZoom",
                "type": 27,
                "description": "<p>Set the minimum zoom (inclusive) at which the layer is visible.\nNote that the zoom levels for layer visibility are based on the\nview zoom level, which may be different from a tile source zoom level.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setMinZoom"
            },
            {
                "name": "setOpacity",
                "type": 28,
                "description": "<p>Set the opacity of the layer, allowed values range from 0 to 1.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setOpacity"
            },
            {
                "name": "setPreload",
                "type": 29,
                "description": "<p>Set the level as number to which we will preload tiles up to.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setPreload"
            },
            {
                "name": "setProperties",
                "type": 30,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setProperties"
            },
            {
                "name": "setSource",
                "type": 31,
                "description": "<p>Set the layer source.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setSource"
            },
            {
                "name": "setUseInterimTilesOnError",
                "type": 32,
                "description": "<p>Set whether we use interim tiles on error.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setUseInterimTilesOnError"
            },
            {
                "name": "setVisible",
                "type": 33,
                "description": "<p>Set the visibility of the layer (<code>true</code> or <code>false</code>).</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setVisible"
            },
            {
                "name": "setZIndex",
                "type": 34,
                "description": "<p>Set Z-index of the layer, which is used to order layers before rendering.\nThe default Z-index is 0.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#setZIndex"
            },
            {
                "name": "un",
                "type": 35,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#un"
            },
            {
                "name": "unset",
                "type": 36,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#unset"
            },
            {
                "name": "updateStyleVariables",
                "type": 37,
                "description": "<p>Update any variables used by the layer style and trigger a re-render.</p>",
                "url": "module-ol_layer_WebGLTile-WebGLTileLayer#updateStyleVariables"
            }
        ],
        "events": []
    },
    {
        "name": "ol/layer/WebGLTile",
        "description": "[MODULE]",
        "url": "module-ol_layer_WebGLTile",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/loadingstrategy",
        "description": "[MODULE]",
        "url": "module-ol_loadingstrategy",
        "members": [],
        "methods": [
            {
                "name": "all",
                "type": 0,
                "description": "<p>Strategy function for loading all features with a single request.</p>",
                "url": "module-ol_loadingstrategy#.all"
            },
            {
                "name": "bbox",
                "type": 1,
                "description": "<p>Strategy function for loading features based on the view's extent and\nresolution.</p>",
                "url": "module-ol_loadingstrategy#.bbox"
            },
            {
                "name": "tile",
                "type": 2,
                "description": "<p>Creates a strategy function for loading features based on a tile grid.</p>",
                "url": "module-ol_loadingstrategy#.tile"
            }
        ],
        "events": []
    },
    {
        "name": "Map",
        "description": "[CLASS]",
        "url": "module-ol_Map-Map",
        "members": [],
        "methods": [
            {
                "name": "addControl",
                "type": 0,
                "description": "<p>Add the given control to the map.</p>",
                "url": "module-ol_Map-Map#addControl"
            },
            {
                "name": "addInteraction",
                "type": 1,
                "description": "<p>Add the given interaction to the map. If you want to add an interaction\nat another point of the collection use <code>getInteractions()</code> and the methods\navailable on {@link module:ol/Collection~Collection}. This can be used to\nstop the event propagation from the handleEvent function. The interactions\nget to handle the events in the reverse order of this collection.</p>",
                "url": "module-ol_Map-Map#addInteraction"
            },
            {
                "name": "addLayer",
                "type": 2,
                "description": "<p>Adds the given layer to the top of this map. If you want to add a layer\nelsewhere in the stack, use <code>getLayers()</code> and the methods available on\n{@link module:ol/Collection~Collection}.</p>",
                "url": "module-ol_Map-Map#addLayer"
            },
            {
                "name": "addOverlay",
                "type": 3,
                "description": "<p>Add the given overlay to the map.</p>",
                "url": "module-ol_Map-Map#addOverlay"
            },
            {
                "name": "changed",
                "type": 4,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Map-Map#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 5,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Map-Map#dispatchEvent"
            },
            {
                "name": "forEachFeatureAtPixel",
                "type": 6,
                "description": "<p>Detect features that intersect a pixel on the viewport, and execute a\ncallback with each intersecting feature. Layers included in the detection can\nbe configured through the <code>layerFilter</code> option in <code>opt_options</code>.</p>",
                "url": "module-ol_Map-Map#forEachFeatureAtPixel"
            },
            {
                "name": "forEachLayerAtPixel",
                "type": 7,
                "description": "<p>Please the <code>layer.getData()</code> method for {@link module:ol/layer/Tile~TileLayer#getData tile layers} or\n{@link module:ol/layer/Image~ImageLayer#getData image layers} instead of using this method.</p>\n<p>Detect layers that have a color value at a pixel on the viewport, and\nexecute a callback with each matching layer. Layers included in the\ndetection can be configured through <code>opt_layerFilter</code>.</p>\n<p>Note: In maps with more than one layer, this method will typically return pixel data\nrepresenting the composed image of all layers visible at the given pixel – because layers\nwill generally share the same rendering context.  To force layers to render separately, and\nto get pixel data representing only one layer at a time, you can assign each layer a unique\n<code>className</code> in its constructor.</p>",
                "url": "module-ol_Map-Map#forEachLayerAtPixel"
            },
            {
                "name": "get",
                "type": 8,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_Map-Map#get"
            },
            {
                "name": "getAllLayers",
                "type": 9,
                "description": "<p>Get all layers from all layer groups.</p>",
                "url": "module-ol_Map-Map#getAllLayers"
            },
            {
                "name": "getControls",
                "type": 10,
                "description": "<p>Get the map controls. Modifying this collection changes the controls\nassociated with the map.</p>",
                "url": "module-ol_Map-Map#getControls"
            },
            {
                "name": "getCoordinateFromPixel",
                "type": 11,
                "description": "<p>Get the coordinate for a given pixel.  This returns a coordinate in the\nuser projection.</p>",
                "url": "module-ol_Map-Map#getCoordinateFromPixel"
            },
            {
                "name": "getEventCoordinate",
                "type": 12,
                "description": "<p>Returns the coordinate in user projection for a browser event.</p>",
                "url": "module-ol_Map-Map#getEventCoordinate"
            },
            {
                "name": "getEventPixel",
                "type": 13,
                "description": "<p>Returns the map pixel position for a browser event relative to the viewport.</p>",
                "url": "module-ol_Map-Map#getEventPixel"
            },
            {
                "name": "getFeaturesAtPixel",
                "type": 14,
                "description": "<p>Get all features that intersect a pixel on the viewport.</p>",
                "url": "module-ol_Map-Map#getFeaturesAtPixel"
            },
            {
                "name": "getInteractions",
                "type": 15,
                "description": "<p>Get the map interactions. Modifying this collection changes the interactions\nassociated with the map.</p>\n<p>Interactions are used for e.g. pan, zoom and rotate.</p>",
                "url": "module-ol_Map-Map#getInteractions"
            },
            {
                "name": "getKeys",
                "type": 16,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_Map-Map#getKeys"
            },
            {
                "name": "getLayerGroup",
                "type": 17,
                "description": "<p>Get the layergroup associated with this map.</p>",
                "url": "module-ol_Map-Map#getLayerGroup"
            },
            {
                "name": "getLayers",
                "type": 18,
                "description": "<p>Get the collection of layers associated with this map.</p>",
                "url": "module-ol_Map-Map#getLayers"
            },
            {
                "name": "getOverlayById",
                "type": 19,
                "description": "<p>Get an overlay by its identifier (the value returned by overlay.getId()).\nNote that the index treats string and numeric identifiers as the same. So\n<code>map.getOverlayById(2)</code> will return an overlay with id <code>'2'</code> or <code>2</code>.</p>",
                "url": "module-ol_Map-Map#getOverlayById"
            },
            {
                "name": "getOverlays",
                "type": 20,
                "description": "<p>Get the map overlays. Modifying this collection changes the overlays\nassociated with the map.</p>",
                "url": "module-ol_Map-Map#getOverlays"
            },
            {
                "name": "getPixelFromCoordinate",
                "type": 21,
                "description": "<p>Get the pixel for a coordinate.  This takes a coordinate in the user\nprojection and returns the corresponding pixel.</p>",
                "url": "module-ol_Map-Map#getPixelFromCoordinate"
            },
            {
                "name": "getProperties",
                "type": 22,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_Map-Map#getProperties"
            },
            {
                "name": "getRevision",
                "type": 23,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Map-Map#getRevision"
            },
            {
                "name": "getSize",
                "type": 24,
                "description": "<p>Get the size of this map.</p>",
                "url": "module-ol_Map-Map#getSize"
            },
            {
                "name": "getTarget",
                "type": 25,
                "description": "<p>Get the target in which this map is rendered.\nNote that this returns what is entered as an option or in setTarget:\nif that was an element, it returns an element; if a string, it returns that.</p>",
                "url": "module-ol_Map-Map#getTarget"
            },
            {
                "name": "getTargetElement",
                "type": 26,
                "description": "<p>Get the DOM element into which this map is rendered. In contrast to\n<code>getTarget</code> this method always return an <code>Element</code>, or <code>null</code> if the\nmap has no target.</p>",
                "url": "module-ol_Map-Map#getTargetElement"
            },
            {
                "name": "getView",
                "type": 27,
                "description": "<p>Get the view associated with this map. A view manages properties such as\ncenter and resolution.</p>",
                "url": "module-ol_Map-Map#getView"
            },
            {
                "name": "getViewport",
                "type": 28,
                "description": "<p>Get the element that serves as the map viewport.</p>",
                "url": "module-ol_Map-Map#getViewport"
            },
            {
                "name": "hasFeatureAtPixel",
                "type": 29,
                "description": "<p>Detect if features intersect a pixel on the viewport. Layers included in the\ndetection can be configured through <code>opt_layerFilter</code>.</p>",
                "url": "module-ol_Map-Map#hasFeatureAtPixel"
            },
            {
                "name": "on",
                "type": 30,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Map-Map#on"
            },
            {
                "name": "once",
                "type": 31,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Map-Map#once"
            },
            {
                "name": "removeControl",
                "type": 32,
                "description": "<p>Remove the given control from the map.</p>",
                "url": "module-ol_Map-Map#removeControl"
            },
            {
                "name": "removeInteraction",
                "type": 33,
                "description": "<p>Remove the given interaction from the map.</p>",
                "url": "module-ol_Map-Map#removeInteraction"
            },
            {
                "name": "removeLayer",
                "type": 34,
                "description": "<p>Removes the given layer from the map.</p>",
                "url": "module-ol_Map-Map#removeLayer"
            },
            {
                "name": "removeOverlay",
                "type": 35,
                "description": "<p>Remove the given overlay from the map.</p>",
                "url": "module-ol_Map-Map#removeOverlay"
            },
            {
                "name": "render",
                "type": 36,
                "description": "<p>Request a map rendering (at the next animation frame).</p>",
                "url": "module-ol_Map-Map#render"
            },
            {
                "name": "renderSync",
                "type": 37,
                "description": "<p>Requests an immediate render in a synchronous manner.</p>",
                "url": "module-ol_Map-Map#renderSync"
            },
            {
                "name": "set",
                "type": 38,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_Map-Map#set"
            },
            {
                "name": "setLayerGroup",
                "type": 39,
                "description": "<p>Sets the layergroup of this map.</p>",
                "url": "module-ol_Map-Map#setLayerGroup"
            },
            {
                "name": "setLayers",
                "type": 40,
                "description": "<p>Clear any existing layers and add layers to the map.</p>",
                "url": "module-ol_Map-Map#setLayers"
            },
            {
                "name": "setProperties",
                "type": 41,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_Map-Map#setProperties"
            },
            {
                "name": "setSize",
                "type": 42,
                "description": "<p>Set the size of this map.</p>",
                "url": "module-ol_Map-Map#setSize"
            },
            {
                "name": "setTarget",
                "type": 43,
                "description": "<p>Set the target element to render this map into.</p>",
                "url": "module-ol_Map-Map#setTarget"
            },
            {
                "name": "setView",
                "type": 44,
                "description": "<p>Set the view for this map.</p>",
                "url": "module-ol_Map-Map#setView"
            },
            {
                "name": "un",
                "type": 45,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Map-Map#un"
            },
            {
                "name": "unset",
                "type": 46,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_Map-Map#unset"
            },
            {
                "name": "updateSize",
                "type": 47,
                "description": "<p>Force a recalculation of the map viewport size.  This should be called when\nthird-party code changes the size of the map viewport.</p>",
                "url": "module-ol_Map-Map#updateSize"
            }
        ],
        "events": []
    },
    {
        "name": "MapBrowserEvent",
        "description": "[CLASS]",
        "url": "module-ol_MapBrowserEvent-MapBrowserEvent",
        "members": [
            {
                "name": "coordinate",
                "type": 0,
                "description": "<p>The coordinate corresponding to the original browser event.  This will be in the user\nprojection if one is set.  Otherwise it will be in the view projection.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#coordinate"
            },
            {
                "name": "dragging",
                "type": 1,
                "description": "<p>Indicates if the map is currently being dragged. Only set for\n<code>POINTERDRAG</code> and <code>POINTERMOVE</code> events. Default is <code>false</code>.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#dragging"
            },
            {
                "name": "frameState",
                "type": 2,
                "description": "<p>The frame state at the time of the event.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#frameState"
            },
            {
                "name": "map",
                "type": 3,
                "description": "<p>The map where the event occurred.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#map"
            },
            {
                "name": "originalEvent",
                "type": 4,
                "description": "<p>The original browser event.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#originalEvent"
            },
            {
                "name": "pixel",
                "type": 5,
                "description": "<p>The map pixel relative to the viewport corresponding to the original event.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#pixel"
            },
            {
                "name": "target",
                "type": 6,
                "description": "<p>The event target.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#target"
            },
            {
                "name": "type",
                "type": 7,
                "description": "<p>The event type.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevents the default browser action.\nSee <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault\">https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault</a>.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Prevents further propagation of the current event.\nSee <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation\">https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation</a>.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:change"
            },
            {
                "name": "click",
                "type": 1,
                "description": "<p>A click with no dragging. A double click will fire two of this.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:click"
            },
            {
                "name": "dblclick",
                "type": 2,
                "description": "<p>A true double click, with no dragging.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:dblclick"
            },
            {
                "name": "error",
                "type": 3,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:error"
            },
            {
                "name": "loadend",
                "type": 4,
                "description": "<p>Triggered when loading of additional map data has completed.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:loadend"
            },
            {
                "name": "loadstart",
                "type": 5,
                "description": "<p>Triggered when loading of additional map data (tiles, images, features) starts.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:loadstart"
            },
            {
                "name": "moveend",
                "type": 6,
                "description": "<p>Triggered after the map is moved.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:moveend"
            },
            {
                "name": "movestart",
                "type": 7,
                "description": "<p>Triggered when the map starts moving.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:movestart"
            },
            {
                "name": "pointerdrag",
                "type": 8,
                "description": "<p>Triggered when a pointer is dragged.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:pointerdrag"
            },
            {
                "name": "pointermove",
                "type": 9,
                "description": "<p>Triggered when a pointer is moved. Note that on touch devices this is\ntriggered when the map is panned, so is not the same as mousemove.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:pointermove"
            },
            {
                "name": "postrender",
                "type": 10,
                "description": "<p>Triggered after a map frame is rendered.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:postrender"
            },
            {
                "name": "singleclick",
                "type": 11,
                "description": "<p>A true single click with no dragging and no double click. Note that this\nevent is delayed by 250 ms to ensure that it is not a double click.</p>",
                "url": "module-ol_MapBrowserEvent-MapBrowserEvent#event:singleclick"
            }
        ]
    },
    {
        "name": "MapEvent",
        "description": "[CLASS]",
        "url": "module-ol_MapEvent-MapEvent",
        "members": [
            {
                "name": "frameState",
                "type": 0,
                "description": "<p>The frame state at the time of the event.</p>",
                "url": "module-ol_MapEvent-MapEvent#frameState"
            },
            {
                "name": "map",
                "type": 1,
                "description": "<p>The map where the event occurred.</p>",
                "url": "module-ol_MapEvent-MapEvent#map"
            },
            {
                "name": "target",
                "type": 2,
                "description": "<p>The event target.</p>",
                "url": "module-ol_MapEvent-MapEvent#target"
            },
            {
                "name": "type",
                "type": 3,
                "description": "<p>The event type.</p>",
                "url": "module-ol_MapEvent-MapEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_MapEvent-MapEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_MapEvent-MapEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:error"
            },
            {
                "name": "loadend",
                "type": 2,
                "description": "<p>Triggered when loading of additional map data has completed.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:loadend"
            },
            {
                "name": "loadstart",
                "type": 3,
                "description": "<p>Triggered when loading of additional map data (tiles, images, features) starts.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:loadstart"
            },
            {
                "name": "moveend",
                "type": 4,
                "description": "<p>Triggered after the map is moved.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:moveend"
            },
            {
                "name": "movestart",
                "type": 5,
                "description": "<p>Triggered when the map starts moving.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:movestart"
            },
            {
                "name": "postrender",
                "type": 6,
                "description": "<p>Triggered after a map frame is rendered.</p>",
                "url": "module-ol_MapEvent-MapEvent#event:postrender"
            }
        ]
    },
    {
        "name": "BaseObject",
        "description": "[CLASS]",
        "url": "module-ol_Object-BaseObject",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Object-BaseObject#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Object-BaseObject#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_Object-BaseObject#get"
            },
            {
                "name": "getKeys",
                "type": 3,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_Object-BaseObject#getKeys"
            },
            {
                "name": "getProperties",
                "type": 4,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_Object-BaseObject#getProperties"
            },
            {
                "name": "getRevision",
                "type": 5,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Object-BaseObject#getRevision"
            },
            {
                "name": "on",
                "type": 6,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Object-BaseObject#on"
            },
            {
                "name": "once",
                "type": 7,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Object-BaseObject#once"
            },
            {
                "name": "set",
                "type": 8,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_Object-BaseObject#set"
            },
            {
                "name": "setProperties",
                "type": 9,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_Object-BaseObject#setProperties"
            },
            {
                "name": "un",
                "type": 10,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Object-BaseObject#un"
            },
            {
                "name": "unset",
                "type": 11,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_Object-BaseObject#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ObjectEvent",
        "description": "[CLASS]",
        "url": "module-ol_Object#.ObjectEvent",
        "members": [
            {
                "name": "key",
                "type": 0,
                "description": "<p>The name of the property whose value is changing.</p>",
                "url": "module-ol_Object#.ObjectEvent#key"
            },
            {
                "name": "oldValue",
                "type": 1,
                "description": "<p>The old value. To get the new value use <code>e.target.get(e.key)</code> where\n<code>e</code> is the event object.</p>",
                "url": "module-ol_Object#.ObjectEvent#oldValue"
            },
            {
                "name": "target",
                "type": 2,
                "description": "<p>The event target.</p>",
                "url": "module-ol_Object#.ObjectEvent#target"
            },
            {
                "name": "type",
                "type": 3,
                "description": "<p>The event type.</p>",
                "url": "module-ol_Object#.ObjectEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_Object#.ObjectEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_Object#.ObjectEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_Object#.ObjectEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_Object#.ObjectEvent#event:error"
            },
            {
                "name": "propertychange",
                "type": 2,
                "description": "<p>Triggered when a property is changed.</p>",
                "url": "module-ol_Object#.ObjectEvent#event:propertychange"
            }
        ]
    },
    {
        "name": "Observable",
        "description": "[CLASS]",
        "url": "module-ol_Observable-Observable",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Observable-Observable#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Observable-Observable#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Observable-Observable#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Observable-Observable#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Observable-Observable#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Observable-Observable#un"
            }
        ],
        "events": []
    },
    {
        "name": "ol/Observable",
        "description": "[MODULE]",
        "url": "module-ol_Observable",
        "members": [],
        "methods": [
            {
                "name": "unByKey",
                "type": 0,
                "description": "<p>Removes an event listener using the key returned by <code>on()</code> or <code>once()</code>.</p>",
                "url": "module-ol_Observable#.unByKey"
            }
        ],
        "events": []
    },
    {
        "name": "Overlay",
        "description": "[CLASS]",
        "url": "module-ol_Overlay-Overlay",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_Overlay-Overlay#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Overlay-Overlay#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_Overlay-Overlay#get"
            },
            {
                "name": "getElement",
                "type": 3,
                "description": "<p>Get the DOM element of this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#getElement"
            },
            {
                "name": "getId",
                "type": 4,
                "description": "<p>Get the overlay identifier which is set on constructor.</p>",
                "url": "module-ol_Overlay-Overlay#getId"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_Overlay-Overlay#getKeys"
            },
            {
                "name": "getMap",
                "type": 6,
                "description": "<p>Get the map associated with this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#getMap"
            },
            {
                "name": "getOffset",
                "type": 7,
                "description": "<p>Get the offset of this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#getOffset"
            },
            {
                "name": "getPosition",
                "type": 8,
                "description": "<p>Get the current position of this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#getPosition"
            },
            {
                "name": "getPositioning",
                "type": 9,
                "description": "<p>Get the current positioning of this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#getPositioning"
            },
            {
                "name": "getProperties",
                "type": 10,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_Overlay-Overlay#getProperties"
            },
            {
                "name": "getRevision",
                "type": 11,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_Overlay-Overlay#getRevision"
            },
            {
                "name": "on",
                "type": 12,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_Overlay-Overlay#on"
            },
            {
                "name": "once",
                "type": 13,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_Overlay-Overlay#once"
            },
            {
                "name": "panIntoView",
                "type": 14,
                "description": "<p>Pan the map so that the overlay is entirely visible in the current viewport\n(if necessary).</p>",
                "url": "module-ol_Overlay-Overlay#panIntoView"
            },
            {
                "name": "set",
                "type": 15,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_Overlay-Overlay#set"
            },
            {
                "name": "setElement",
                "type": 16,
                "description": "<p>Set the DOM element to be associated with this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#setElement"
            },
            {
                "name": "setMap",
                "type": 17,
                "description": "<p>Set the map to be associated with this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#setMap"
            },
            {
                "name": "setOffset",
                "type": 18,
                "description": "<p>Set the offset for this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#setOffset"
            },
            {
                "name": "setPosition",
                "type": 19,
                "description": "<p>Set the position for this overlay. If the position is <code>undefined</code> the\noverlay is hidden.</p>",
                "url": "module-ol_Overlay-Overlay#setPosition"
            },
            {
                "name": "setPositioning",
                "type": 20,
                "description": "<p>Set the positioning for this overlay.</p>",
                "url": "module-ol_Overlay-Overlay#setPositioning"
            },
            {
                "name": "setProperties",
                "type": 21,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_Overlay-Overlay#setProperties"
            },
            {
                "name": "un",
                "type": 22,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_Overlay-Overlay#un"
            },
            {
                "name": "unset",
                "type": 23,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_Overlay-Overlay#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/Overlay",
        "description": "[MODULE]",
        "url": "module-ol_Overlay",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/OverlayPositioning",
        "description": "[MODULE]",
        "url": "module-ol_OverlayPositioning",
        "members": [
            {
                "name": "module:ol/OverlayPositioning",
                "type": 0,
                "description": "<p>Overlay position: <code>'bottom-left'</code>, <code>'bottom-center'</code>,  <code>'bottom-right'</code>,\n<code>'center-left'</code>, <code>'center-center'</code>, <code>'center-right'</code>, <code>'top-left'</code>,\n<code>'top-center'</code>, <code>'top-right'</code></p>",
                "url": "module-ol_OverlayPositioning"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/pixel",
        "description": "[MODULE]",
        "url": "module-ol_pixel",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "PluggableMap",
        "description": "[CLASS]",
        "url": "module-ol_PluggableMap-PluggableMap",
        "members": [],
        "methods": [
            {
                "name": "addControl",
                "type": 0,
                "description": "<p>Add the given control to the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#addControl"
            },
            {
                "name": "addInteraction",
                "type": 1,
                "description": "<p>Add the given interaction to the map. If you want to add an interaction\nat another point of the collection use <code>getInteractions()</code> and the methods\navailable on {@link module:ol/Collection~Collection}. This can be used to\nstop the event propagation from the handleEvent function. The interactions\nget to handle the events in the reverse order of this collection.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#addInteraction"
            },
            {
                "name": "addLayer",
                "type": 2,
                "description": "<p>Adds the given layer to the top of this map. If you want to add a layer\nelsewhere in the stack, use <code>getLayers()</code> and the methods available on\n{@link module:ol/Collection~Collection}.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#addLayer"
            },
            {
                "name": "addOverlay",
                "type": 3,
                "description": "<p>Add the given overlay to the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#addOverlay"
            },
            {
                "name": "changed",
                "type": 4,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 5,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#dispatchEvent"
            },
            {
                "name": "forEachFeatureAtPixel",
                "type": 6,
                "description": "<p>Detect features that intersect a pixel on the viewport, and execute a\ncallback with each intersecting feature. Layers included in the detection can\nbe configured through the <code>layerFilter</code> option in <code>opt_options</code>.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#forEachFeatureAtPixel"
            },
            {
                "name": "forEachLayerAtPixel",
                "type": 7,
                "description": "<p>Please the <code>layer.getData()</code> method for {@link module:ol/layer/Tile~TileLayer#getData tile layers} or\n{@link module:ol/layer/Image~ImageLayer#getData image layers} instead of using this method.</p>\n<p>Detect layers that have a color value at a pixel on the viewport, and\nexecute a callback with each matching layer. Layers included in the\ndetection can be configured through <code>opt_layerFilter</code>.</p>\n<p>Note: In maps with more than one layer, this method will typically return pixel data\nrepresenting the composed image of all layers visible at the given pixel – because layers\nwill generally share the same rendering context.  To force layers to render separately, and\nto get pixel data representing only one layer at a time, you can assign each layer a unique\n<code>className</code> in its constructor.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#forEachLayerAtPixel"
            },
            {
                "name": "get",
                "type": 8,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#get"
            },
            {
                "name": "getAllLayers",
                "type": 9,
                "description": "<p>Get all layers from all layer groups.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getAllLayers"
            },
            {
                "name": "getControls",
                "type": 10,
                "description": "<p>Get the map controls. Modifying this collection changes the controls\nassociated with the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getControls"
            },
            {
                "name": "getCoordinateFromPixel",
                "type": 11,
                "description": "<p>Get the coordinate for a given pixel.  This returns a coordinate in the\nuser projection.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getCoordinateFromPixel"
            },
            {
                "name": "getEventCoordinate",
                "type": 12,
                "description": "<p>Returns the coordinate in user projection for a browser event.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getEventCoordinate"
            },
            {
                "name": "getEventPixel",
                "type": 13,
                "description": "<p>Returns the map pixel position for a browser event relative to the viewport.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getEventPixel"
            },
            {
                "name": "getFeaturesAtPixel",
                "type": 14,
                "description": "<p>Get all features that intersect a pixel on the viewport.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getFeaturesAtPixel"
            },
            {
                "name": "getInteractions",
                "type": 15,
                "description": "<p>Get the map interactions. Modifying this collection changes the interactions\nassociated with the map.</p>\n<p>Interactions are used for e.g. pan, zoom and rotate.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getInteractions"
            },
            {
                "name": "getKeys",
                "type": 16,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getKeys"
            },
            {
                "name": "getLayerGroup",
                "type": 17,
                "description": "<p>Get the layergroup associated with this map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getLayerGroup"
            },
            {
                "name": "getLayers",
                "type": 18,
                "description": "<p>Get the collection of layers associated with this map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getLayers"
            },
            {
                "name": "getOverlayById",
                "type": 19,
                "description": "<p>Get an overlay by its identifier (the value returned by overlay.getId()).\nNote that the index treats string and numeric identifiers as the same. So\n<code>map.getOverlayById(2)</code> will return an overlay with id <code>'2'</code> or <code>2</code>.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getOverlayById"
            },
            {
                "name": "getOverlays",
                "type": 20,
                "description": "<p>Get the map overlays. Modifying this collection changes the overlays\nassociated with the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getOverlays"
            },
            {
                "name": "getPixelFromCoordinate",
                "type": 21,
                "description": "<p>Get the pixel for a coordinate.  This takes a coordinate in the user\nprojection and returns the corresponding pixel.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getPixelFromCoordinate"
            },
            {
                "name": "getProperties",
                "type": 22,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getProperties"
            },
            {
                "name": "getRevision",
                "type": 23,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getRevision"
            },
            {
                "name": "getSize",
                "type": 24,
                "description": "<p>Get the size of this map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getSize"
            },
            {
                "name": "getTarget",
                "type": 25,
                "description": "<p>Get the target in which this map is rendered.\nNote that this returns what is entered as an option or in setTarget:\nif that was an element, it returns an element; if a string, it returns that.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getTarget"
            },
            {
                "name": "getTargetElement",
                "type": 26,
                "description": "<p>Get the DOM element into which this map is rendered. In contrast to\n<code>getTarget</code> this method always return an <code>Element</code>, or <code>null</code> if the\nmap has no target.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getTargetElement"
            },
            {
                "name": "getView",
                "type": 27,
                "description": "<p>Get the view associated with this map. A view manages properties such as\ncenter and resolution.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getView"
            },
            {
                "name": "getViewport",
                "type": 28,
                "description": "<p>Get the element that serves as the map viewport.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#getViewport"
            },
            {
                "name": "hasFeatureAtPixel",
                "type": 29,
                "description": "<p>Detect if features intersect a pixel on the viewport. Layers included in the\ndetection can be configured through <code>opt_layerFilter</code>.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#hasFeatureAtPixel"
            },
            {
                "name": "on",
                "type": 30,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#on"
            },
            {
                "name": "once",
                "type": 31,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#once"
            },
            {
                "name": "removeControl",
                "type": 32,
                "description": "<p>Remove the given control from the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#removeControl"
            },
            {
                "name": "removeInteraction",
                "type": 33,
                "description": "<p>Remove the given interaction from the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#removeInteraction"
            },
            {
                "name": "removeLayer",
                "type": 34,
                "description": "<p>Removes the given layer from the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#removeLayer"
            },
            {
                "name": "removeOverlay",
                "type": 35,
                "description": "<p>Remove the given overlay from the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#removeOverlay"
            },
            {
                "name": "render",
                "type": 36,
                "description": "<p>Request a map rendering (at the next animation frame).</p>",
                "url": "module-ol_PluggableMap-PluggableMap#render"
            },
            {
                "name": "renderSync",
                "type": 37,
                "description": "<p>Requests an immediate render in a synchronous manner.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#renderSync"
            },
            {
                "name": "set",
                "type": 38,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#set"
            },
            {
                "name": "setLayerGroup",
                "type": 39,
                "description": "<p>Sets the layergroup of this map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#setLayerGroup"
            },
            {
                "name": "setLayers",
                "type": 40,
                "description": "<p>Clear any existing layers and add layers to the map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#setLayers"
            },
            {
                "name": "setProperties",
                "type": 41,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_PluggableMap-PluggableMap#setProperties"
            },
            {
                "name": "setSize",
                "type": 42,
                "description": "<p>Set the size of this map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#setSize"
            },
            {
                "name": "setTarget",
                "type": 43,
                "description": "<p>Set the target element to render this map into.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#setTarget"
            },
            {
                "name": "setView",
                "type": 44,
                "description": "<p>Set the view for this map.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#setView"
            },
            {
                "name": "un",
                "type": 45,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#un"
            },
            {
                "name": "unset",
                "type": 46,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#unset"
            },
            {
                "name": "updateSize",
                "type": 47,
                "description": "<p>Force a recalculation of the map viewport size.  This should be called when\nthird-party code changes the size of the map viewport.</p>",
                "url": "module-ol_PluggableMap-PluggableMap#updateSize"
            }
        ],
        "events": []
    },
    {
        "name": "ol/PluggableMap",
        "description": "[MODULE]",
        "url": "module-ol_PluggableMap",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/proj",
        "description": "[MODULE]",
        "url": "module-ol_proj",
        "members": [],
        "methods": [
            {
                "name": "addCoordinateTransforms",
                "type": 0,
                "description": "<p>Registers coordinate transform functions to convert coordinates between the\nsource projection and the destination projection.\nThe forward and inverse functions convert coordinate pairs; this function\nconverts these into the functions used internally which also handle\nextents and coordinate arrays.</p>",
                "url": "module-ol_proj#.addCoordinateTransforms"
            },
            {
                "name": "addEquivalentProjections",
                "type": 1,
                "description": "<p>Registers transformation functions that don't alter coordinates. Those allow\nto transform between projections with equal meaning.</p>",
                "url": "module-ol_proj#.addEquivalentProjections"
            },
            {
                "name": "addProjection",
                "type": 2,
                "description": "<p>Add a Projection object to the list of supported projections that can be\nlooked up by their code.</p>",
                "url": "module-ol_proj#.addProjection"
            },
            {
                "name": "clearUserProjection",
                "type": 3,
                "description": "<p>Clear the user projection if set.</p>",
                "url": "module-ol_proj#.clearUserProjection"
            },
            {
                "name": "equivalent",
                "type": 4,
                "description": "<p>Checks if two projections are the same, that is every coordinate in one\nprojection does represent the same geographic point as the same coordinate in\nthe other projection.</p>",
                "url": "module-ol_proj#.equivalent"
            },
            {
                "name": "fromLonLat",
                "type": 5,
                "description": "<p>Transforms a coordinate from longitude/latitude to a different projection.</p>",
                "url": "module-ol_proj#.fromLonLat"
            },
            {
                "name": "get",
                "type": 6,
                "description": "<p>Fetches a Projection object for the code specified.</p>",
                "url": "module-ol_proj#.get"
            },
            {
                "name": "getPointResolution",
                "type": 7,
                "description": "<p>Get the resolution of the point in degrees or distance units.\nFor projections with degrees as the unit this will simply return the\nprovided resolution. For other projections the point resolution is\nby default estimated by transforming the <code>point</code> pixel to EPSG:4326,\nmeasuring its width and height on the normal sphere,\nand taking the average of the width and height.\nA custom function can be provided for a specific projection, either\nby setting the <code>getPointResolution</code> option in the\n{@link module:ol/proj/Projection~Projection} constructor or by using\n{@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing\nprojection object.</p>",
                "url": "module-ol_proj#.getPointResolution"
            },
            {
                "name": "getTransform",
                "type": 8,
                "description": "<p>Given the projection-like objects, searches for a transformation\nfunction to convert a coordinates array from the source projection to the\ndestination projection.</p>",
                "url": "module-ol_proj#.getTransform"
            },
            {
                "name": "getUserProjection",
                "type": 9,
                "description": "<p>Get the projection for coordinates supplied from and returned by API methods.\nNote that this method is not yet a part of the stable API.  Support for user\nprojections is not yet complete and should be considered experimental.</p>",
                "url": "module-ol_proj#.getUserProjection"
            },
            {
                "name": "setUserProjection",
                "type": 10,
                "description": "<p>Set the projection for coordinates supplied from and returned by API methods.\nThis includes all API methods except for those interacting with tile grids.</p>",
                "url": "module-ol_proj#.setUserProjection"
            },
            {
                "name": "toLonLat",
                "type": 11,
                "description": "<p>Transforms a coordinate to longitude/latitude.</p>",
                "url": "module-ol_proj#.toLonLat"
            },
            {
                "name": "transform",
                "type": 12,
                "description": "<p>Transforms a coordinate from source projection to destination projection.\nThis returns a new coordinate (and does not modify the original).</p>\n<p>See {@link module:ol/proj.transformExtent} for extent transformation.\nSee the transform method of {@link module:ol/geom/Geometry~Geometry} and its\nsubclasses for geometry transforms.</p>",
                "url": "module-ol_proj#.transform"
            },
            {
                "name": "transformExtent",
                "type": 13,
                "description": "<p>Transforms an extent from source projection to destination projection.  This\nreturns a new extent (and does not modify the original).</p>",
                "url": "module-ol_proj#.transformExtent"
            },
            {
                "name": "useGeographic",
                "type": 14,
                "description": "<p>Use geographic coordinates (WGS-84 datum) in API methods.  This includes all API\nmethods except for those interacting with tile grids.</p>",
                "url": "module-ol_proj#.useGeographic"
            }
        ],
        "events": []
    },
    {
        "name": "ol/proj/proj4",
        "description": "[MODULE]",
        "url": "module-ol_proj_proj4",
        "members": [],
        "methods": [
            {
                "name": "register",
                "type": 0,
                "description": "<p>Make projections defined in proj4 (with <code>proj4.defs()</code>) available in\nOpenLayers.</p>\n<p>This function should be called whenever changes are made to the proj4\nregistry, e.g. after calling <code>proj4.defs()</code>. Existing transforms will not be\nmodified by this function.</p>",
                "url": "module-ol_proj_proj4#.register"
            }
        ],
        "events": []
    },
    {
        "name": "Projection",
        "description": "[CLASS]",
        "url": "module-ol_proj_Projection-Projection",
        "members": [],
        "methods": [
            {
                "name": "getAxisOrientation",
                "type": 0,
                "description": "<p>Get the axis orientation of this projection.\nExample values are:\nenu - the default easting, northing, elevation.\nneu - northing, easting, up - useful for &quot;lat/long&quot; geographic coordinates,\n    or south orientated transverse mercator.\nwnu - westing, northing, up - some planetary coordinate systems have\n    &quot;west positive&quot; coordinate systems</p>",
                "url": "module-ol_proj_Projection-Projection#getAxisOrientation"
            },
            {
                "name": "getCode",
                "type": 1,
                "description": "<p>Get the code for this projection, e.g. 'EPSG:4326'.</p>",
                "url": "module-ol_proj_Projection-Projection#getCode"
            },
            {
                "name": "getExtent",
                "type": 2,
                "description": "<p>Get the validity extent for this projection.</p>",
                "url": "module-ol_proj_Projection-Projection#getExtent"
            },
            {
                "name": "getMetersPerUnit",
                "type": 3,
                "description": "<p>Get the amount of meters per unit of this projection.  If the projection is\nnot configured with <code>metersPerUnit</code> or a units identifier, the return is\n<code>undefined</code>.</p>",
                "url": "module-ol_proj_Projection-Projection#getMetersPerUnit"
            },
            {
                "name": "getUnits",
                "type": 4,
                "description": "<p>Get the units of this projection.</p>",
                "url": "module-ol_proj_Projection-Projection#getUnits"
            },
            {
                "name": "getWorldExtent",
                "type": 5,
                "description": "<p>Get the world extent for this projection.</p>",
                "url": "module-ol_proj_Projection-Projection#getWorldExtent"
            },
            {
                "name": "isGlobal",
                "type": 6,
                "description": "<p>Is this projection a global projection which spans the whole world?</p>",
                "url": "module-ol_proj_Projection-Projection#isGlobal"
            },
            {
                "name": "setExtent",
                "type": 7,
                "description": "<p>Set the validity extent for this projection.</p>",
                "url": "module-ol_proj_Projection-Projection#setExtent"
            },
            {
                "name": "setGetPointResolution",
                "type": 8,
                "description": "<p>Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}\nfor this projection.</p>",
                "url": "module-ol_proj_Projection-Projection#setGetPointResolution"
            },
            {
                "name": "setGlobal",
                "type": 9,
                "description": "<p>Set if the projection is a global projection which spans the whole world</p>",
                "url": "module-ol_proj_Projection-Projection#setGlobal"
            },
            {
                "name": "setWorldExtent",
                "type": 10,
                "description": "<p>Set the world extent for this projection.</p>",
                "url": "module-ol_proj_Projection-Projection#setWorldExtent"
            }
        ],
        "events": []
    },
    {
        "name": "ol/proj/Units",
        "description": "[MODULE]",
        "url": "module-ol_proj_Units",
        "members": [
            {
                "name": "METERS_PER_UNIT",
                "type": 0,
                "description": "<p>Meters per unit lookup table.</p>",
                "url": "module-ol_proj_Units#.METERS_PER_UNIT"
            },
            {
                "name": "Units",
                "type": 1,
                "description": "<p>Projection units: <code>'degrees'</code>, <code>'ft'</code>, <code>'m'</code>, <code>'pixels'</code>, <code>'tile-pixels'</code> or\n<code>'us-ft'</code>.</p>",
                "url": "module-ol_proj_Units-Units"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/render",
        "description": "[MODULE]",
        "url": "module-ol_render",
        "members": [],
        "methods": [
            {
                "name": "getRenderPixel",
                "type": 0,
                "description": "<p>Gets the pixel of the event's canvas context from the map viewport's CSS pixel.</p>",
                "url": "module-ol_render#.getRenderPixel"
            },
            {
                "name": "getVectorContext",
                "type": 1,
                "description": "<p>Gets a vector context for drawing to the event's canvas.</p>",
                "url": "module-ol_render#.getVectorContext"
            },
            {
                "name": "toContext",
                "type": 2,
                "description": "<p>Binds a Canvas Immediate API to a canvas context, to allow drawing geometries\nto the context's canvas.</p>\n<p>The units for geometry coordinates are css pixels relative to the top left\ncorner of the canvas element.</p>\n<pre class=\"prettyprint source lang-js\"><code>import {toContext} from 'ol/render';\nimport Fill from 'ol/style/Fill';\nimport Polygon from 'ol/geom/Polygon';\n\nvar canvas = document.createElement('canvas');\nvar render = toContext(canvas.getContext('2d'),\n    { size: [100, 100] });\nrender.setFillStrokeStyle(new Fill({ color: blue }));\nrender.drawPolygon(\n    new Polygon([[[0, 0], [100, 100], [100, 0], [0, 0]]]));</code></pre>",
                "url": "module-ol_render#.toContext"
            }
        ],
        "events": []
    },
    {
        "name": "ol/render/canvas",
        "description": "[MODULE]",
        "url": "module-ol_render_canvas",
        "members": [
            {
                "name": "labelCache",
                "type": 0,
                "description": "<p>The label cache for text rendering. To change the default cache size of 2048\nentries, use {@link module:ol/structs/LRUCache~LRUCache#setSize cache.setSize()}.\nDeprecated - there is no label cache any more.</p>",
                "url": "module-ol_render_canvas#.labelCache"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "CanvasImmediateRenderer",
        "description": "[CLASS]",
        "url": "module-ol_render_canvas_Immediate-CanvasImmediateRenderer",
        "members": [],
        "methods": [
            {
                "name": "drawCircle",
                "type": 0,
                "description": "<p>Render a circle geometry into the canvas.  Rendering is immediate and uses\nthe current fill and stroke styles.</p>",
                "url": "module-ol_render_canvas_Immediate-CanvasImmediateRenderer#drawCircle"
            },
            {
                "name": "drawFeature",
                "type": 1,
                "description": "<p>Render a feature into the canvas.  Note that any <code>zIndex</code> on the provided\nstyle will be ignored - features are rendered immediately in the order that\nthis method is called.  If you need <code>zIndex</code> support, you should be using an\n{@link module:ol/layer/Vector~VectorLayer VectorLayer} instead.</p>",
                "url": "module-ol_render_canvas_Immediate-CanvasImmediateRenderer#drawFeature"
            },
            {
                "name": "drawGeometry",
                "type": 2,
                "description": "<p>Render a geometry into the canvas.  Call\n{@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.</p>",
                "url": "module-ol_render_canvas_Immediate-CanvasImmediateRenderer#drawGeometry"
            },
            {
                "name": "setStyle",
                "type": 3,
                "description": "<p>Set the rendering style.  Note that since this is an immediate rendering API,\nany <code>zIndex</code> on the provided style will be ignored.</p>",
                "url": "module-ol_render_canvas_Immediate-CanvasImmediateRenderer#setStyle"
            }
        ],
        "events": []
    },
    {
        "name": "RenderEvent",
        "description": "[CLASS]",
        "url": "module-ol_render_Event-RenderEvent",
        "members": [
            {
                "name": "context",
                "type": 0,
                "description": "<p>Canvas context. Not available when the event is dispatched by the map. For Canvas 2D layers,\nthe context will be the 2D rendering context.  For WebGL layers, the context will be the WebGL\ncontext.</p>",
                "url": "module-ol_render_Event-RenderEvent#context"
            },
            {
                "name": "frameState",
                "type": 1,
                "description": "<p>An object representing the current render frame state.</p>",
                "url": "module-ol_render_Event-RenderEvent#frameState"
            },
            {
                "name": "inversePixelTransform",
                "type": 2,
                "description": "<p>Transform from CSS pixels (relative to the top-left corner of the map viewport)\nto rendered pixels on this event's <code>context</code>. Only available when a Canvas renderer is used, null otherwise.</p>",
                "url": "module-ol_render_Event-RenderEvent#inversePixelTransform"
            },
            {
                "name": "target",
                "type": 3,
                "description": "<p>The event target.</p>",
                "url": "module-ol_render_Event-RenderEvent#target"
            },
            {
                "name": "type",
                "type": 4,
                "description": "<p>The event type.</p>",
                "url": "module-ol_render_Event-RenderEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_render_Event-RenderEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_render_Event-RenderEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:error"
            },
            {
                "name": "postcompose",
                "type": 2,
                "description": "<p>Triggered after layers are composed.  When dispatched by the map, the event object will not have\na <code>context</code> set.  When dispatched by a layer, the event object will have a <code>context</code> set.  Only\nWebGL layers currently dispatch this event.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:postcompose"
            },
            {
                "name": "postrender",
                "type": 3,
                "description": "<p>Triggered after a layer is rendered.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:postrender"
            },
            {
                "name": "precompose",
                "type": 4,
                "description": "<p>Triggered before layers are composed.  When dispatched by the map, the event object will not have\na <code>context</code> set.  When dispatched by a layer, the event object will have a <code>context</code> set.  Only\nWebGL layers currently dispatch this event.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:precompose"
            },
            {
                "name": "prerender",
                "type": 5,
                "description": "<p>Triggered before a layer is rendered.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:prerender"
            },
            {
                "name": "rendercomplete",
                "type": 6,
                "description": "<p>Triggered when rendering is complete, i.e. all sources and tiles have\nfinished loading for the current viewport, and all tiles are faded in.\nThe event object will not have a <code>context</code> set.</p>",
                "url": "module-ol_render_Event-RenderEvent#event:rendercomplete"
            }
        ]
    },
    {
        "name": "RenderFeature",
        "description": "[CLASS]",
        "url": "module-ol_render_Feature-RenderFeature",
        "members": [],
        "methods": [
            {
                "name": "get",
                "type": 0,
                "description": "<p>Get a feature property by its key.</p>",
                "url": "module-ol_render_Feature-RenderFeature#get"
            },
            {
                "name": "getExtent",
                "type": 1,
                "description": "<p>Get the extent of this feature's geometry.</p>",
                "url": "module-ol_render_Feature-RenderFeature#getExtent"
            },
            {
                "name": "getGeometry",
                "type": 2,
                "description": "<p>For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when\ndetermining the geometry type in style function (see {@link #getType}).</p>",
                "url": "module-ol_render_Feature-RenderFeature#getGeometry"
            },
            {
                "name": "getId",
                "type": 3,
                "description": "<p>Get the feature identifier.  This is a stable identifier for the feature and\nis set when reading data from a remote source.</p>",
                "url": "module-ol_render_Feature-RenderFeature#getId"
            },
            {
                "name": "getProperties",
                "type": 4,
                "description": "<p>Get the feature properties.</p>",
                "url": "module-ol_render_Feature-RenderFeature#getProperties"
            },
            {
                "name": "getType",
                "type": 5,
                "description": "<p>Get the type of this feature's geometry.</p>",
                "url": "module-ol_render_Feature-RenderFeature#getType"
            }
        ],
        "events": []
    },
    {
        "name": "ol/render/Feature",
        "description": "[MODULE]",
        "url": "module-ol_render_Feature",
        "members": [],
        "methods": [
            {
                "name": "toFeature",
                "type": 0,
                "description": "<p>Create an <code>ol/Feature</code> from an <code>ol/render/Feature</code></p>",
                "url": "module-ol_render_Feature#.toFeature"
            },
            {
                "name": "toGeometry",
                "type": 1,
                "description": "<p>Create a geometry from an <code>ol/render/Feature</code></p>",
                "url": "module-ol_render_Feature#.toGeometry"
            }
        ],
        "events": []
    },
    {
        "name": "VectorContext",
        "description": "[CLASS]",
        "url": "module-ol_render_VectorContext-VectorContext",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "CanvasImageLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_ImageLayer-CanvasImageLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "CanvasTileLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_TileLayer-CanvasTileLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "CanvasVectorImageLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorImageLayer-CanvasVectorImageLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "CanvasVectorLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorLayer-CanvasVectorLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "CanvasVectorTileLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_canvas_VectorTileLayer-CanvasVectorTileLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "CompositeMapRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_Composite-CompositeMapRenderer",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "WebGLPointsLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_webgl_PointsLayer-WebGLPointsLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "ol/renderer/webgl/PointsLayer",
        "description": "[MODULE]",
        "url": "module-ol_renderer_webgl_PointsLayer",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "WebGLTileLayerRenderer",
        "description": "[CLASS]",
        "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer#dispatchEvent"
            },
            {
                "name": "getRevision",
                "type": 2,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer#getRevision"
            },
            {
                "name": "on",
                "type": 3,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer#on"
            },
            {
                "name": "once",
                "type": 4,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer#once"
            },
            {
                "name": "un",
                "type": 5,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_renderer_webgl_TileLayer-WebGLTileLayerRenderer#un"
            }
        ],
        "events": []
    },
    {
        "name": "ol/renderer/webgl/TileLayer",
        "description": "[MODULE]",
        "url": "module-ol_renderer_webgl_TileLayer",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/size",
        "description": "[MODULE]",
        "url": "module-ol_size",
        "members": [],
        "methods": [
            {
                "name": "toSize",
                "type": 0,
                "description": "<p>Returns an <code>Size</code> array for the passed in number (meaning: square) or\n<code>Size</code> array.\n(meaning: non-square),</p>",
                "url": "module-ol_size#.toSize"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source",
        "description": "[MODULE]",
        "url": "module-ol_source",
        "members": [],
        "methods": [
            {
                "name": "sourcesFromTileGrid",
                "type": 0,
                "description": "<p>Creates a sources function from a tile grid. This function can be used as value for the\n<code>sources</code> property of the {@link module:ol/layer/Layer~Layer} subclasses that support it.</p>",
                "url": "module-ol_source#.sourcesFromTileGrid"
            }
        ],
        "events": []
    },
    {
        "name": "BingMaps",
        "description": "[CLASS]",
        "url": "module-ol_source_BingMaps-BingMaps",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#get"
            },
            {
                "name": "getApiKey",
                "type": 4,
                "description": "<p>Get the api key used for this source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getApiKey"
            },
            {
                "name": "getAttributions",
                "type": 5,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 6,
                "url": "module-ol_source_BingMaps-BingMaps#getAttributionsCollapsible"
            },
            {
                "name": "getImagerySet",
                "type": 7,
                "description": "<p>Get the imagery set associated with this source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getImagerySet"
            },
            {
                "name": "getKeys",
                "type": 8,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getKeys"
            },
            {
                "name": "getProjection",
                "type": 9,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getProjection"
            },
            {
                "name": "getProperties",
                "type": 10,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getProperties"
            },
            {
                "name": "getRevision",
                "type": 11,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getRevision"
            },
            {
                "name": "getState",
                "type": 12,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getState"
            },
            {
                "name": "getTileGrid",
                "type": 13,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 14,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 15,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 16,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#getUrls"
            },
            {
                "name": "on",
                "type": 17,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#on"
            },
            {
                "name": "once",
                "type": 18,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#once"
            },
            {
                "name": "refresh",
                "type": 19,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#refresh"
            },
            {
                "name": "set",
                "type": 20,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#set"
            },
            {
                "name": "setAttributions",
                "type": 21,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 22,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 23,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 24,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 25,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 26,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 27,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setUrl"
            },
            {
                "name": "setUrls",
                "type": 28,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#setUrls"
            },
            {
                "name": "un",
                "type": 29,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#un"
            },
            {
                "name": "unset",
                "type": 30,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_BingMaps-BingMaps#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/BingMaps",
        "description": "[MODULE]",
        "url": "module-ol_source_BingMaps",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "CartoDB",
        "description": "[CLASS]",
        "url": "module-ol_source_CartoDB-CartoDB",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_CartoDB-CartoDB#getAttributionsCollapsible"
            },
            {
                "name": "getConfig",
                "type": 6,
                "description": "<p>Returns the current config.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getConfig"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getKeys"
            },
            {
                "name": "getProjection",
                "type": 8,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getProjection"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getRevision"
            },
            {
                "name": "getState",
                "type": 11,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getState"
            },
            {
                "name": "getTileGrid",
                "type": 12,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 13,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 14,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 15,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#getUrls"
            },
            {
                "name": "on",
                "type": 16,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#on"
            },
            {
                "name": "once",
                "type": 17,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#once"
            },
            {
                "name": "refresh",
                "type": 18,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#refresh"
            },
            {
                "name": "set",
                "type": 19,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#set"
            },
            {
                "name": "setAttributions",
                "type": 20,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setAttributions"
            },
            {
                "name": "setConfig",
                "type": 21,
                "description": "<p>Sets the CartoDB config</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setConfig"
            },
            {
                "name": "setProperties",
                "type": 22,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 23,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 24,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 25,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 26,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 27,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setUrl"
            },
            {
                "name": "setUrls",
                "type": 28,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#setUrls"
            },
            {
                "name": "un",
                "type": 29,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#un"
            },
            {
                "name": "unset",
                "type": 30,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#unset"
            },
            {
                "name": "updateConfig",
                "type": 31,
                "description": "<p>Updates the carto db config.</p>",
                "url": "module-ol_source_CartoDB-CartoDB#updateConfig"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/CartoDB",
        "description": "[MODULE]",
        "url": "module-ol_source_CartoDB",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Cluster",
        "description": "[CLASS]",
        "url": "module-ol_source_Cluster-Cluster",
        "members": [],
        "methods": [
            {
                "name": "addFeature",
                "type": 0,
                "description": "<p>Add a single feature to the source.  If you want to add a batch of features\nat once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}\ninstead. A feature will not be added to the source if feature with\nthe same id is already there. The reason for this behavior is to avoid\nfeature duplication when using bbox or tile loading strategies.\nNote: this also applies if an {@link module:ol/Collection~Collection} is used for features,\nmeaning that if a feature with a duplicate id is added in the collection, it will\nbe removed from it right away.</p>",
                "url": "module-ol_source_Cluster-Cluster#addFeature"
            },
            {
                "name": "addFeatures",
                "type": 1,
                "description": "<p>Add a batch of features to the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#addFeatures"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Cluster-Cluster#changed"
            },
            {
                "name": "clear",
                "type": 3,
                "description": "<p>Remove all features from the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Cluster-Cluster#dispatchEvent"
            },
            {
                "name": "forEachFeature",
                "type": 5,
                "description": "<p>Iterate through all features on the source, calling the provided callback\nwith each one.  If the callback returns any &quot;truthy&quot; value, iteration will\nstop and the function will return the same value.\nNote: this function only iterate through the feature that have a defined geometry.</p>",
                "url": "module-ol_source_Cluster-Cluster#forEachFeature"
            },
            {
                "name": "forEachFeatureInExtent",
                "type": 6,
                "description": "<p>Iterate through all features whose bounding box intersects the provided\nextent (note that the feature's geometry may not intersect the extent),\ncalling the callback with each feature.  If the callback returns a &quot;truthy&quot;\nvalue, iteration will stop and the function will return the same value.</p>\n<p>If you are interested in features whose geometry intersects an extent, call\nthe {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.</p>\n<p>When <code>useSpatialIndex</code> is set to false, this method will loop through all\nfeatures, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.</p>",
                "url": "module-ol_source_Cluster-Cluster#forEachFeatureInExtent"
            },
            {
                "name": "forEachFeatureIntersectingExtent",
                "type": 7,
                "description": "<p>Iterate through all features whose geometry intersects the provided extent,\ncalling the callback with each feature.  If the callback returns a &quot;truthy&quot;\nvalue, iteration will stop and the function will return the same value.</p>\n<p>If you only want to test for bounding box intersection, call the\n{@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.</p>",
                "url": "module-ol_source_Cluster-Cluster#forEachFeatureIntersectingExtent"
            },
            {
                "name": "get",
                "type": 8,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Cluster-Cluster#get"
            },
            {
                "name": "getAttributions",
                "type": 9,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 10,
                "url": "module-ol_source_Cluster-Cluster#getAttributionsCollapsible"
            },
            {
                "name": "getClosestFeatureToCoordinate",
                "type": 11,
                "description": "<p>Get the closest feature to the provided coordinate.</p>\n<p>This method is not available when the source is configured with\n<code>useSpatialIndex</code> set to <code>false</code>.</p>",
                "url": "module-ol_source_Cluster-Cluster#getClosestFeatureToCoordinate"
            },
            {
                "name": "getDistance",
                "type": 12,
                "description": "<p>Get the distance in pixels between clusters.</p>",
                "url": "module-ol_source_Cluster-Cluster#getDistance"
            },
            {
                "name": "getExtent",
                "type": 13,
                "description": "<p>Get the extent of the features currently in the source.</p>\n<p>This method is not available when the source is configured with\n<code>useSpatialIndex</code> set to <code>false</code>.</p>",
                "url": "module-ol_source_Cluster-Cluster#getExtent"
            },
            {
                "name": "getFeatureById",
                "type": 14,
                "description": "<p>Get a feature by its identifier (the value returned by feature.getId()).\nNote that the index treats string and numeric identifiers as the same.  So\n<code>source.getFeatureById(2)</code> will return a feature with id <code>'2'</code> or <code>2</code>.</p>",
                "url": "module-ol_source_Cluster-Cluster#getFeatureById"
            },
            {
                "name": "getFeatures",
                "type": 15,
                "description": "<p>Get a snapshot of the features currently on the source in random order. The returned array\nis a copy, the features are references to the features in the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#getFeatures"
            },
            {
                "name": "getFeaturesAtCoordinate",
                "type": 16,
                "description": "<p>Get all features whose geometry intersects the provided coordinate.</p>",
                "url": "module-ol_source_Cluster-Cluster#getFeaturesAtCoordinate"
            },
            {
                "name": "getFeaturesCollection",
                "type": 17,
                "description": "<p>Get the features collection associated with this source. Will be <code>null</code>\nunless the source was configured with <code>useSpatialIndex</code> set to <code>false</code>, or\nwith an {@link module:ol/Collection~Collection} as <code>features</code>.</p>",
                "url": "module-ol_source_Cluster-Cluster#getFeaturesCollection"
            },
            {
                "name": "getFeaturesInExtent",
                "type": 18,
                "description": "<p>Get all features whose bounding box intersects the provided extent.  Note that this returns an array of\nall features intersecting the given extent in random order (so it may include\nfeatures whose geometries do not intersect the extent).</p>\n<p>When <code>useSpatialIndex</code> is set to false, this method will return all\nfeatures.</p>",
                "url": "module-ol_source_Cluster-Cluster#getFeaturesInExtent"
            },
            {
                "name": "getFormat",
                "type": 19,
                "description": "<p>Get the format associated with this source.</p>",
                "url": "module-ol_source_Cluster-Cluster#getFormat"
            },
            {
                "name": "getKeys",
                "type": 20,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Cluster-Cluster#getKeys"
            },
            {
                "name": "getMinDistance",
                "type": 21,
                "description": "<p>The configured minimum distance between clusters.</p>",
                "url": "module-ol_source_Cluster-Cluster#getMinDistance"
            },
            {
                "name": "getProjection",
                "type": 22,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#getProjection"
            },
            {
                "name": "getProperties",
                "type": 23,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Cluster-Cluster#getProperties"
            },
            {
                "name": "getRevision",
                "type": 24,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Cluster-Cluster#getRevision"
            },
            {
                "name": "getSource",
                "type": 25,
                "description": "<p>Get a reference to the wrapped source.</p>",
                "url": "module-ol_source_Cluster-Cluster#getSource"
            },
            {
                "name": "getState",
                "type": 26,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Cluster-Cluster#getState"
            },
            {
                "name": "getUrl",
                "type": 27,
                "description": "<p>Get the url associated with this source.</p>",
                "url": "module-ol_source_Cluster-Cluster#getUrl"
            },
            {
                "name": "hasFeature",
                "type": 28,
                "description": "<p>Returns true if the feature is contained within the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#hasFeature"
            },
            {
                "name": "on",
                "type": 29,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Cluster-Cluster#on"
            },
            {
                "name": "once",
                "type": 30,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Cluster-Cluster#once"
            },
            {
                "name": "removeFeature",
                "type": 31,
                "description": "<p>Remove a single feature from the source.  If you want to remove all features\nat once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method\ninstead.</p>",
                "url": "module-ol_source_Cluster-Cluster#removeFeature"
            },
            {
                "name": "removeLoadedExtent",
                "type": 32,
                "description": "<p>Remove an extent from the list of loaded extents.</p>",
                "url": "module-ol_source_Cluster-Cluster#removeLoadedExtent"
            },
            {
                "name": "set",
                "type": 33,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Cluster-Cluster#set"
            },
            {
                "name": "setAttributions",
                "type": 34,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Cluster-Cluster#setAttributions"
            },
            {
                "name": "setDistance",
                "type": 35,
                "description": "<p>Set the distance within which features will be clusterd together.</p>",
                "url": "module-ol_source_Cluster-Cluster#setDistance"
            },
            {
                "name": "setLoader",
                "type": 36,
                "description": "<p>Set the new loader of the source. The next render cycle will use the\nnew loader.</p>",
                "url": "module-ol_source_Cluster-Cluster#setLoader"
            },
            {
                "name": "setMinDistance",
                "type": 37,
                "description": "<p>Set the minimum distance between clusters. Will be capped at the\nconfigured distance.</p>",
                "url": "module-ol_source_Cluster-Cluster#setMinDistance"
            },
            {
                "name": "setProperties",
                "type": 38,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Cluster-Cluster#setProperties"
            },
            {
                "name": "setSource",
                "type": 39,
                "description": "<p>Replace the wrapped source.</p>",
                "url": "module-ol_source_Cluster-Cluster#setSource"
            },
            {
                "name": "setUrl",
                "type": 40,
                "description": "<p>Points the source to a new url. The next render cycle will use the new url.</p>",
                "url": "module-ol_source_Cluster-Cluster#setUrl"
            },
            {
                "name": "un",
                "type": 41,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Cluster-Cluster#un"
            },
            {
                "name": "unset",
                "type": 42,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Cluster-Cluster#unset"
            }
        ],
        "events": []
    },
    {
        "name": "DataTileSource",
        "description": "[CLASS]",
        "url": "module-ol_source_DataTile-DataTileSource",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_DataTile-DataTileSource#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#getTileGrid"
            },
            {
                "name": "on",
                "type": 12,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#on"
            },
            {
                "name": "once",
                "type": 13,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#once"
            },
            {
                "name": "refresh",
                "type": 14,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#refresh"
            },
            {
                "name": "set",
                "type": 15,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#set"
            },
            {
                "name": "setAttributions",
                "type": 16,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 17,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_DataTile-DataTileSource#setProperties"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_DataTile-DataTileSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/DataTile",
        "description": "[MODULE]",
        "url": "module-ol_source_DataTile",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "GeoTIFFSource",
        "description": "[CLASS]",
        "url": "module-ol_source_GeoTIFF-GeoTIFFSource",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getTileGrid"
            },
            {
                "name": "getView",
                "type": 12,
                "description": "<p>Get a promise for view properties based on the source.  Use the result of this function\nas the <code>view</code> option in a map constructor.</p>\n<pre class=\"prettyprint source\"><code>const source = new GeoTIFF(options);\n\nconst map = new Map({\n  target: 'map',\n  layers: [\n    new TileLayer({\n      source: source,\n    }),\n  ],\n  view: source.getView(),\n});</code></pre>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#getView"
            },
            {
                "name": "on",
                "type": 13,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#on"
            },
            {
                "name": "once",
                "type": 14,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#once"
            },
            {
                "name": "refresh",
                "type": 15,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#refresh"
            },
            {
                "name": "set",
                "type": 16,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#set"
            },
            {
                "name": "setAttributions",
                "type": 17,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 18,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#setProperties"
            },
            {
                "name": "un",
                "type": 19,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#un"
            },
            {
                "name": "unset",
                "type": 20,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_GeoTIFF-GeoTIFFSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/GeoTIFF",
        "description": "[MODULE]",
        "url": "module-ol_source_GeoTIFF",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "IIIF",
        "description": "[CLASS]",
        "url": "module-ol_source_IIIF-IIIF",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_IIIF-IIIF#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_IIIF-IIIF#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_IIIF-IIIF#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_IIIF-IIIF#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_IIIF-IIIF#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_IIIF-IIIF#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_IIIF-IIIF#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_IIIF-IIIF#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_IIIF-IIIF#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_IIIF-IIIF#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_IIIF-IIIF#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_IIIF-IIIF#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_IIIF-IIIF#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_IIIF-IIIF#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_IIIF-IIIF#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_IIIF-IIIF#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_IIIF-IIIF#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_IIIF-IIIF#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_IIIF-IIIF#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_IIIF-IIIF#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_IIIF-IIIF#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_IIIF-IIIF#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_IIIF-IIIF#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ImageSource",
        "description": "[CLASS]",
        "url": "module-ol_source_Image-ImageSource",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Image-ImageSource#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Image-ImageSource#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Image-ImageSource#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Image-ImageSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_Image-ImageSource#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Image-ImageSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 6,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Image-ImageSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Image-ImageSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Image-ImageSource#getRevision"
            },
            {
                "name": "getState",
                "type": 9,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Image-ImageSource#getState"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Image-ImageSource#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Image-ImageSource#once"
            },
            {
                "name": "refresh",
                "type": 12,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Image-ImageSource#refresh"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Image-ImageSource#set"
            },
            {
                "name": "setAttributions",
                "type": 14,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Image-ImageSource#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Image-ImageSource#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Image-ImageSource#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Image-ImageSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/Image",
        "description": "[MODULE]",
        "url": "module-ol_source_Image",
        "members": [
            {
                "name": "ImageSourceEventType",
                "type": 0,
                "url": "module-ol_source_Image#.ImageSourceEventType"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ImageSourceEvent",
        "description": "[CLASS]",
        "url": "module-ol_source_Image#.ImageSourceEvent",
        "members": [
            {
                "name": "image",
                "type": 0,
                "description": "<p>The image related to the event.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#image"
            },
            {
                "name": "target",
                "type": 1,
                "description": "<p>The event target.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#target"
            },
            {
                "name": "type",
                "type": 2,
                "description": "<p>The event type.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#event:error"
            },
            {
                "name": "imageloadend",
                "type": 2,
                "description": "<p>Triggered when an image finishes loading.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#event:imageloadend"
            },
            {
                "name": "imageloaderror",
                "type": 3,
                "description": "<p>Triggered if image loading results in an error.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#event:imageloaderror"
            },
            {
                "name": "imageloadstart",
                "type": 4,
                "description": "<p>Triggered when an image starts loading.</p>",
                "url": "module-ol_source_Image#.ImageSourceEvent#event:imageloadstart"
            }
        ]
    },
    {
        "name": "ImageArcGISRest",
        "description": "[CLASS]",
        "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getAttributionsCollapsible"
            },
            {
                "name": "getImageLoadFunction",
                "type": 5,
                "description": "<p>Return the image load function of the source.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getImageLoadFunction"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getKeys"
            },
            {
                "name": "getParams",
                "type": 7,
                "description": "<p>Get the user-provided params, i.e. those passed to the constructor through\nthe &quot;params&quot; option, and possibly updated using the updateParams method.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getParams"
            },
            {
                "name": "getProjection",
                "type": 8,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getProjection"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getRevision"
            },
            {
                "name": "getState",
                "type": 11,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getState"
            },
            {
                "name": "getUrl",
                "type": 12,
                "description": "<p>Return the URL used for this ArcGIS source.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#getUrl"
            },
            {
                "name": "on",
                "type": 13,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#on"
            },
            {
                "name": "once",
                "type": 14,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#once"
            },
            {
                "name": "refresh",
                "type": 15,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#refresh"
            },
            {
                "name": "set",
                "type": 16,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#set"
            },
            {
                "name": "setAttributions",
                "type": 17,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#setAttributions"
            },
            {
                "name": "setImageLoadFunction",
                "type": 18,
                "description": "<p>Set the image load function of the source.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#setImageLoadFunction"
            },
            {
                "name": "setProperties",
                "type": 19,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#setProperties"
            },
            {
                "name": "setUrl",
                "type": 20,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#setUrl"
            },
            {
                "name": "un",
                "type": 21,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#un"
            },
            {
                "name": "unset",
                "type": 22,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#unset"
            },
            {
                "name": "updateParams",
                "type": 23,
                "description": "<p>Update the user-provided params.</p>",
                "url": "module-ol_source_ImageArcGISRest-ImageArcGISRest#updateParams"
            }
        ],
        "events": []
    },
    {
        "name": "ImageCanvasSource",
        "description": "[CLASS]",
        "url": "module-ol_source_ImageCanvas-ImageCanvasSource",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 6,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getRevision"
            },
            {
                "name": "getState",
                "type": 9,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#getState"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#once"
            },
            {
                "name": "refresh",
                "type": 12,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#refresh"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#set"
            },
            {
                "name": "setAttributions",
                "type": 14,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_ImageCanvas-ImageCanvasSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/ImageCanvas",
        "description": "[MODULE]",
        "url": "module-ol_source_ImageCanvas",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ImageMapGuide",
        "description": "[CLASS]",
        "url": "module-ol_source_ImageMapGuide-ImageMapGuide",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getAttributionsCollapsible"
            },
            {
                "name": "getImageLoadFunction",
                "type": 5,
                "description": "<p>Return the image load function of the source.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getImageLoadFunction"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getKeys"
            },
            {
                "name": "getParams",
                "type": 7,
                "description": "<p>Get the user-provided params, i.e. those passed to the constructor through\nthe &quot;params&quot; option, and possibly updated using the updateParams method.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getParams"
            },
            {
                "name": "getProjection",
                "type": 8,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getProjection"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getRevision"
            },
            {
                "name": "getState",
                "type": 11,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#getState"
            },
            {
                "name": "on",
                "type": 12,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#on"
            },
            {
                "name": "once",
                "type": 13,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#once"
            },
            {
                "name": "refresh",
                "type": 14,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#refresh"
            },
            {
                "name": "set",
                "type": 15,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#set"
            },
            {
                "name": "setAttributions",
                "type": 16,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#setAttributions"
            },
            {
                "name": "setImageLoadFunction",
                "type": 17,
                "description": "<p>Set the image load function of the MapGuide source.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#setImageLoadFunction"
            },
            {
                "name": "setProperties",
                "type": 18,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#setProperties"
            },
            {
                "name": "un",
                "type": 19,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#un"
            },
            {
                "name": "unset",
                "type": 20,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#unset"
            },
            {
                "name": "updateParams",
                "type": 21,
                "description": "<p>Update the user-provided params.</p>",
                "url": "module-ol_source_ImageMapGuide-ImageMapGuide#updateParams"
            }
        ],
        "events": []
    },
    {
        "name": "Static",
        "description": "[CLASS]",
        "url": "module-ol_source_ImageStatic-Static",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_ImageStatic-Static#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_ImageStatic-Static#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_ImageStatic-Static#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_ImageStatic-Static#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_ImageStatic-Static#getAttributionsCollapsible"
            },
            {
                "name": "getImageExtent",
                "type": 5,
                "description": "<p>Returns the image extent</p>",
                "url": "module-ol_source_ImageStatic-Static#getImageExtent"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_ImageStatic-Static#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_ImageStatic-Static#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_ImageStatic-Static#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_ImageStatic-Static#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_ImageStatic-Static#getState"
            },
            {
                "name": "getUrl",
                "type": 11,
                "description": "<p>Return the URL used for this image source.</p>",
                "url": "module-ol_source_ImageStatic-Static#getUrl"
            },
            {
                "name": "on",
                "type": 12,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_ImageStatic-Static#on"
            },
            {
                "name": "once",
                "type": 13,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_ImageStatic-Static#once"
            },
            {
                "name": "refresh",
                "type": 14,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_ImageStatic-Static#refresh"
            },
            {
                "name": "set",
                "type": 15,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_ImageStatic-Static#set"
            },
            {
                "name": "setAttributions",
                "type": 16,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_ImageStatic-Static#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 17,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_ImageStatic-Static#setProperties"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_ImageStatic-Static#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_ImageStatic-Static#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ImageWMS",
        "description": "[CLASS]",
        "url": "module-ol_source_ImageWMS-ImageWMS",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_ImageWMS-ImageWMS#getAttributionsCollapsible"
            },
            {
                "name": "getFeatureInfoUrl",
                "type": 5,
                "description": "<p>Return the GetFeatureInfo URL for the passed coordinate, resolution, and\nprojection. Return <code>undefined</code> if the GetFeatureInfo URL cannot be\nconstructed.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getFeatureInfoUrl"
            },
            {
                "name": "getImageLoadFunction",
                "type": 6,
                "description": "<p>Return the image load function of the source.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getImageLoadFunction"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getKeys"
            },
            {
                "name": "getLegendUrl",
                "type": 8,
                "description": "<p>Return the GetLegendGraphic URL, optionally optimized for the passed\nresolution and possibly including any passed specific parameters. Returns\n<code>undefined</code> if the GetLegendGraphic URL cannot be constructed.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getLegendUrl"
            },
            {
                "name": "getParams",
                "type": 9,
                "description": "<p>Get the user-provided params, i.e. those passed to the constructor through\nthe &quot;params&quot; option, and possibly updated using the updateParams method.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getParams"
            },
            {
                "name": "getProjection",
                "type": 10,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getProjection"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getRevision"
            },
            {
                "name": "getState",
                "type": 13,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getState"
            },
            {
                "name": "getUrl",
                "type": 14,
                "description": "<p>Return the URL used for this WMS source.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#getUrl"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#setAttributions"
            },
            {
                "name": "setImageLoadFunction",
                "type": 20,
                "description": "<p>Set the image load function of the source.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#setImageLoadFunction"
            },
            {
                "name": "setProperties",
                "type": 21,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#setProperties"
            },
            {
                "name": "setUrl",
                "type": 22,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#setUrl"
            },
            {
                "name": "un",
                "type": 23,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#un"
            },
            {
                "name": "unset",
                "type": 24,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#unset"
            },
            {
                "name": "updateParams",
                "type": 25,
                "description": "<p>Update the user-provided params.</p>",
                "url": "module-ol_source_ImageWMS-ImageWMS#updateParams"
            }
        ],
        "events": []
    },
    {
        "name": "OSM",
        "description": "[CLASS]",
        "url": "module-ol_source_OSM-OSM",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_OSM-OSM#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_OSM-OSM#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_OSM-OSM#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_OSM-OSM#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_OSM-OSM#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_OSM-OSM#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_OSM-OSM#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_OSM-OSM#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_OSM-OSM#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_OSM-OSM#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_OSM-OSM#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_OSM-OSM#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_OSM-OSM#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_OSM-OSM#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_OSM-OSM#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_OSM-OSM#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_OSM-OSM#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_OSM-OSM#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_OSM-OSM#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_OSM-OSM#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_OSM-OSM#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_OSM-OSM#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_OSM-OSM#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_OSM-OSM#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_OSM-OSM#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_OSM-OSM#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_OSM-OSM#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_OSM-OSM#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_OSM-OSM#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/OSM",
        "description": "[MODULE]",
        "url": "module-ol_source_OSM",
        "members": [
            {
                "name": "ATTRIBUTION",
                "type": 0,
                "description": "<p>The attribution containing a link to the OpenStreetMap Copyright and License\npage.</p>",
                "url": "module-ol_source_OSM#.ATTRIBUTION"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "RasterSource",
        "description": "[CLASS]",
        "url": "module-ol_source_Raster-RasterSource",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Raster-RasterSource#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Raster-RasterSource#dispatchEvent"
            },
            {
                "name": "dispose",
                "type": 2,
                "description": "<p>Clean up and unregister the worker.</p>",
                "url": "module-ol_source_Raster-RasterSource#dispose"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Raster-RasterSource#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Raster-RasterSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_Raster-RasterSource#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Raster-RasterSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Raster-RasterSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Raster-RasterSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Raster-RasterSource#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Raster-RasterSource#getState"
            },
            {
                "name": "on",
                "type": 11,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Raster-RasterSource#on"
            },
            {
                "name": "once",
                "type": 12,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Raster-RasterSource#once"
            },
            {
                "name": "refresh",
                "type": 13,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Raster-RasterSource#refresh"
            },
            {
                "name": "set",
                "type": 14,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Raster-RasterSource#set"
            },
            {
                "name": "setAttributions",
                "type": 15,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Raster-RasterSource#setAttributions"
            },
            {
                "name": "setOperation",
                "type": 16,
                "description": "<p>Set the operation.</p>",
                "url": "module-ol_source_Raster-RasterSource#setOperation"
            },
            {
                "name": "setProperties",
                "type": 17,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Raster-RasterSource#setProperties"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Raster-RasterSource#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Raster-RasterSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/Raster",
        "description": "[MODULE]",
        "url": "module-ol_source_Raster",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "RasterSourceEvent",
        "description": "[CLASS]",
        "url": "module-ol_source_Raster#.RasterSourceEvent",
        "members": [
            {
                "name": "data",
                "type": 0,
                "description": "<p>An object made available to all operations.  This can be used by operations\nas a storage object (e.g. for calculating statistics).</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#data"
            },
            {
                "name": "extent",
                "type": 1,
                "description": "<p>The raster extent.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#extent"
            },
            {
                "name": "resolution",
                "type": 2,
                "description": "<p>The pixel resolution (map units per pixel).</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#resolution"
            },
            {
                "name": "target",
                "type": 3,
                "description": "<p>The event target.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#target"
            },
            {
                "name": "type",
                "type": 4,
                "description": "<p>The event type.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "afteroperations",
                "type": 0,
                "description": "<p>Triggered after operations are run.  Listeners will receive an event object with\na <code>data</code> property.  If more than one thread is used, <code>data</code> will be an array of\nobjects.  If a single thread is used, <code>data</code> will be a single object.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#event:afteroperations"
            },
            {
                "name": "beforeoperations",
                "type": 1,
                "description": "<p>Triggered before operations are run.  Listeners will receive an event object with\na <code>data</code> property that can be used to make data available to operations.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#event:beforeoperations"
            },
            {
                "name": "change",
                "type": 2,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#event:change"
            },
            {
                "name": "error",
                "type": 3,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_source_Raster#.RasterSourceEvent#event:error"
            }
        ]
    },
    {
        "name": "Source",
        "description": "[CLASS]",
        "url": "module-ol_source_Source-Source",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Source-Source#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 1,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Source-Source#dispatchEvent"
            },
            {
                "name": "get",
                "type": 2,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Source-Source#get"
            },
            {
                "name": "getAttributions",
                "type": 3,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Source-Source#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 4,
                "url": "module-ol_source_Source-Source#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 5,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Source-Source#getKeys"
            },
            {
                "name": "getProjection",
                "type": 6,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Source-Source#getProjection"
            },
            {
                "name": "getProperties",
                "type": 7,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Source-Source#getProperties"
            },
            {
                "name": "getRevision",
                "type": 8,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Source-Source#getRevision"
            },
            {
                "name": "getState",
                "type": 9,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Source-Source#getState"
            },
            {
                "name": "on",
                "type": 10,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Source-Source#on"
            },
            {
                "name": "once",
                "type": 11,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Source-Source#once"
            },
            {
                "name": "refresh",
                "type": 12,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Source-Source#refresh"
            },
            {
                "name": "set",
                "type": 13,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Source-Source#set"
            },
            {
                "name": "setAttributions",
                "type": 14,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Source-Source#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 15,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Source-Source#setProperties"
            },
            {
                "name": "un",
                "type": 16,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Source-Source#un"
            },
            {
                "name": "unset",
                "type": 17,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Source-Source#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/Source",
        "description": "[MODULE]",
        "url": "module-ol_source_Source",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Stamen",
        "description": "[CLASS]",
        "url": "module-ol_source_Stamen-Stamen",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Stamen-Stamen#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_Stamen-Stamen#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Stamen-Stamen#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Stamen-Stamen#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_Stamen-Stamen#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Stamen-Stamen#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Stamen-Stamen#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Stamen-Stamen#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Stamen-Stamen#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_Stamen-Stamen#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_Stamen-Stamen#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Stamen-Stamen#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Stamen-Stamen#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Stamen-Stamen#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Stamen-Stamen#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Stamen-Stamen#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_Stamen-Stamen#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_Stamen-Stamen#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_Stamen-Stamen#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_Stamen-Stamen#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_Stamen-Stamen#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Stamen-Stamen#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Stamen-Stamen#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/State",
        "description": "[MODULE]",
        "url": "module-ol_source_State",
        "members": [
            {
                "name": "module:ol/source/State",
                "type": 0,
                "description": "<p>State of the source, one of 'undefined', 'loading', 'ready' or 'error'.</p>",
                "url": "module-ol_source_State"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "TileSource",
        "description": "[CLASS]",
        "url": "module-ol_source_Tile-TileSource",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Tile-TileSource#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_Tile-TileSource#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Tile-TileSource#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Tile-TileSource#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Tile-TileSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_Tile-TileSource#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Tile-TileSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Tile-TileSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Tile-TileSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Tile-TileSource#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Tile-TileSource#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_Tile-TileSource#getTileGrid"
            },
            {
                "name": "on",
                "type": 12,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Tile-TileSource#on"
            },
            {
                "name": "once",
                "type": 13,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Tile-TileSource#once"
            },
            {
                "name": "refresh",
                "type": 14,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Tile-TileSource#refresh"
            },
            {
                "name": "set",
                "type": 15,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Tile-TileSource#set"
            },
            {
                "name": "setAttributions",
                "type": 16,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Tile-TileSource#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 17,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Tile-TileSource#setProperties"
            },
            {
                "name": "un",
                "type": 18,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Tile-TileSource#un"
            },
            {
                "name": "unset",
                "type": 19,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Tile-TileSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "TileSourceEvent",
        "description": "[CLASS]",
        "url": "module-ol_source_Tile#.TileSourceEvent",
        "members": [
            {
                "name": "target",
                "type": 0,
                "description": "<p>The event target.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#target"
            },
            {
                "name": "tile",
                "type": 1,
                "description": "<p>The tile related to the event.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#tile"
            },
            {
                "name": "type",
                "type": 2,
                "description": "<p>The event type.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "change",
                "type": 0,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#event:change"
            },
            {
                "name": "error",
                "type": 1,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#event:error"
            },
            {
                "name": "tileloadend",
                "type": 2,
                "description": "<p>Triggered when a tile finishes loading, either when its data is loaded,\nor when loading was aborted because the tile is no longer needed.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#event:tileloadend"
            },
            {
                "name": "tileloaderror",
                "type": 3,
                "description": "<p>Triggered if tile loading results in an error.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#event:tileloaderror"
            },
            {
                "name": "tileloadstart",
                "type": 4,
                "description": "<p>Triggered when a tile starts loading.</p>",
                "url": "module-ol_source_Tile#.TileSourceEvent#event:tileloadstart"
            }
        ]
    },
    {
        "name": "TileArcGISRest",
        "description": "[CLASS]",
        "url": "module-ol_source_TileArcGISRest-TileArcGISRest",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getKeys"
            },
            {
                "name": "getParams",
                "type": 7,
                "description": "<p>Get the user-provided params, i.e. those passed to the constructor through\nthe &quot;params&quot; option, and possibly updated using the updateParams method.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getParams"
            },
            {
                "name": "getProjection",
                "type": 8,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getProjection"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getRevision"
            },
            {
                "name": "getState",
                "type": 11,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getState"
            },
            {
                "name": "getTileGrid",
                "type": 12,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 13,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 14,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 15,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#getUrls"
            },
            {
                "name": "on",
                "type": 16,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#on"
            },
            {
                "name": "once",
                "type": 17,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#once"
            },
            {
                "name": "refresh",
                "type": 18,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#refresh"
            },
            {
                "name": "set",
                "type": 19,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#set"
            },
            {
                "name": "setAttributions",
                "type": 20,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 21,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 22,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 23,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 24,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 25,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 26,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setUrl"
            },
            {
                "name": "setUrls",
                "type": 27,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#setUrls"
            },
            {
                "name": "un",
                "type": 28,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#un"
            },
            {
                "name": "unset",
                "type": 29,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#unset"
            },
            {
                "name": "updateParams",
                "type": 30,
                "description": "<p>Update the user-provided params.</p>",
                "url": "module-ol_source_TileArcGISRest-TileArcGISRest#updateParams"
            }
        ],
        "events": []
    },
    {
        "name": "TileDebug",
        "description": "[CLASS]",
        "url": "module-ol_source_TileDebug-TileDebug",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_TileDebug-TileDebug#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_TileDebug-TileDebug#unset"
            }
        ],
        "events": []
    },
    {
        "name": "TileImage",
        "description": "[CLASS]",
        "url": "module-ol_source_TileImage-TileImage",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_TileImage-TileImage#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_TileImage-TileImage#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_TileImage-TileImage#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_TileImage-TileImage#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_TileImage-TileImage#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_TileImage-TileImage#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_TileImage-TileImage#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_TileImage-TileImage#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_TileImage-TileImage#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_TileImage-TileImage#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_TileImage-TileImage#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_TileImage-TileImage#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_TileImage-TileImage#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_TileImage-TileImage#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_TileImage-TileImage#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_TileImage-TileImage#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_TileImage-TileImage#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_TileImage-TileImage#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_TileImage-TileImage#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_TileImage-TileImage#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_TileImage-TileImage#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_TileImage-TileImage#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_TileImage-TileImage#unset"
            }
        ],
        "events": []
    },
    {
        "name": "TileJSON",
        "description": "[CLASS]",
        "url": "module-ol_source_TileJSON-TileJSON",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_TileJSON-TileJSON#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getTileGrid"
            },
            {
                "name": "getTileJSON",
                "type": 12,
                "url": "module-ol_source_TileJSON-TileJSON#getTileJSON"
            },
            {
                "name": "getTileLoadFunction",
                "type": 13,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 14,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 15,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#getUrls"
            },
            {
                "name": "on",
                "type": 16,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#on"
            },
            {
                "name": "once",
                "type": 17,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#once"
            },
            {
                "name": "refresh",
                "type": 18,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#refresh"
            },
            {
                "name": "set",
                "type": 19,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#set"
            },
            {
                "name": "setAttributions",
                "type": 20,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 21,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 22,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 23,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 24,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 25,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 26,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setUrl"
            },
            {
                "name": "setUrls",
                "type": 27,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#setUrls"
            },
            {
                "name": "un",
                "type": 28,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#un"
            },
            {
                "name": "unset",
                "type": 29,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_TileJSON-TileJSON#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/TileJSON",
        "description": "[MODULE]",
        "url": "module-ol_source_TileJSON",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "TileWMS",
        "description": "[CLASS]",
        "url": "module-ol_source_TileWMS-TileWMS",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_TileWMS-TileWMS#getAttributionsCollapsible"
            },
            {
                "name": "getFeatureInfoUrl",
                "type": 6,
                "description": "<p>Return the GetFeatureInfo URL for the passed coordinate, resolution, and\nprojection. Return <code>undefined</code> if the GetFeatureInfo URL cannot be\nconstructed.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getFeatureInfoUrl"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getKeys"
            },
            {
                "name": "getLegendUrl",
                "type": 8,
                "description": "<p>Return the GetLegendGraphic URL, optionally optimized for the passed\nresolution and possibly including any passed specific parameters. Returns\n<code>undefined</code> if the GetLegendGraphic URL cannot be constructed.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getLegendUrl"
            },
            {
                "name": "getParams",
                "type": 9,
                "description": "<p>Get the user-provided params, i.e. those passed to the constructor through\nthe &quot;params&quot; option, and possibly updated using the updateParams method.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getParams"
            },
            {
                "name": "getProjection",
                "type": 10,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getProjection"
            },
            {
                "name": "getProperties",
                "type": 11,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getProperties"
            },
            {
                "name": "getRevision",
                "type": 12,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getRevision"
            },
            {
                "name": "getState",
                "type": 13,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getState"
            },
            {
                "name": "getTileGrid",
                "type": 14,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 15,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 16,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 17,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#getUrls"
            },
            {
                "name": "on",
                "type": 18,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#on"
            },
            {
                "name": "once",
                "type": 19,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#once"
            },
            {
                "name": "refresh",
                "type": 20,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#refresh"
            },
            {
                "name": "set",
                "type": 21,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#set"
            },
            {
                "name": "setAttributions",
                "type": 22,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 23,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 24,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 25,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 26,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 27,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 28,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setUrl"
            },
            {
                "name": "setUrls",
                "type": 29,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#setUrls"
            },
            {
                "name": "un",
                "type": 30,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#un"
            },
            {
                "name": "unset",
                "type": 31,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#unset"
            },
            {
                "name": "updateParams",
                "type": 32,
                "description": "<p>Update the user-provided params.</p>",
                "url": "module-ol_source_TileWMS-TileWMS#updateParams"
            }
        ],
        "events": []
    },
    {
        "name": "UrlTile",
        "description": "[CLASS]",
        "url": "module-ol_source_UrlTile-UrlTile",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_UrlTile-UrlTile#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_UrlTile-UrlTile#setProperties"
            },
            {
                "name": "setTileLoadFunction",
                "type": 21,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 22,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 23,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#setUrl"
            },
            {
                "name": "setUrls",
                "type": 24,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#setUrls"
            },
            {
                "name": "un",
                "type": 25,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#un"
            },
            {
                "name": "unset",
                "type": 26,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_UrlTile-UrlTile#unset"
            }
        ],
        "events": []
    },
    {
        "name": "UTFGrid",
        "description": "[CLASS]",
        "url": "module-ol_source_UTFGrid-UTFGrid",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#dispatchEvent"
            },
            {
                "name": "forDataAtCoordinateAndResolution",
                "type": 3,
                "description": "<p>Calls the callback (synchronously by default) with the available data\nfor given coordinate and resolution (or <code>null</code> if not yet loaded or\nin case of an error).</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#forDataAtCoordinateAndResolution"
            },
            {
                "name": "get",
                "type": 4,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#get"
            },
            {
                "name": "getAttributions",
                "type": 5,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 6,
                "url": "module-ol_source_UTFGrid-UTFGrid#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getKeys"
            },
            {
                "name": "getProjection",
                "type": 8,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getProjection"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getRevision"
            },
            {
                "name": "getState",
                "type": 11,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getState"
            },
            {
                "name": "getTemplate",
                "type": 12,
                "description": "<p>Return the template from TileJSON.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getTemplate"
            },
            {
                "name": "getTileGrid",
                "type": 13,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#getTileGrid"
            },
            {
                "name": "on",
                "type": 14,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#on"
            },
            {
                "name": "once",
                "type": 15,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#once"
            },
            {
                "name": "refresh",
                "type": 16,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#refresh"
            },
            {
                "name": "set",
                "type": 17,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#set"
            },
            {
                "name": "setAttributions",
                "type": 18,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 19,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#setProperties"
            },
            {
                "name": "un",
                "type": 20,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#un"
            },
            {
                "name": "unset",
                "type": 21,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_UTFGrid-UTFGrid#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/UTFGrid",
        "description": "[MODULE]",
        "url": "module-ol_source_UTFGrid",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "VectorSource",
        "description": "[CLASS]",
        "url": "module-ol_source_Vector-VectorSource",
        "members": [],
        "methods": [
            {
                "name": "addFeature",
                "type": 0,
                "description": "<p>Add a single feature to the source.  If you want to add a batch of features\nat once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}\ninstead. A feature will not be added to the source if feature with\nthe same id is already there. The reason for this behavior is to avoid\nfeature duplication when using bbox or tile loading strategies.\nNote: this also applies if an {@link module:ol/Collection~Collection} is used for features,\nmeaning that if a feature with a duplicate id is added in the collection, it will\nbe removed from it right away.</p>",
                "url": "module-ol_source_Vector-VectorSource#addFeature"
            },
            {
                "name": "addFeatures",
                "type": 1,
                "description": "<p>Add a batch of features to the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#addFeatures"
            },
            {
                "name": "changed",
                "type": 2,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Vector-VectorSource#changed"
            },
            {
                "name": "clear",
                "type": 3,
                "description": "<p>Remove all features from the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 4,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Vector-VectorSource#dispatchEvent"
            },
            {
                "name": "forEachFeature",
                "type": 5,
                "description": "<p>Iterate through all features on the source, calling the provided callback\nwith each one.  If the callback returns any &quot;truthy&quot; value, iteration will\nstop and the function will return the same value.\nNote: this function only iterate through the feature that have a defined geometry.</p>",
                "url": "module-ol_source_Vector-VectorSource#forEachFeature"
            },
            {
                "name": "forEachFeatureInExtent",
                "type": 6,
                "description": "<p>Iterate through all features whose bounding box intersects the provided\nextent (note that the feature's geometry may not intersect the extent),\ncalling the callback with each feature.  If the callback returns a &quot;truthy&quot;\nvalue, iteration will stop and the function will return the same value.</p>\n<p>If you are interested in features whose geometry intersects an extent, call\nthe {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.</p>\n<p>When <code>useSpatialIndex</code> is set to false, this method will loop through all\nfeatures, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.</p>",
                "url": "module-ol_source_Vector-VectorSource#forEachFeatureInExtent"
            },
            {
                "name": "forEachFeatureIntersectingExtent",
                "type": 7,
                "description": "<p>Iterate through all features whose geometry intersects the provided extent,\ncalling the callback with each feature.  If the callback returns a &quot;truthy&quot;\nvalue, iteration will stop and the function will return the same value.</p>\n<p>If you only want to test for bounding box intersection, call the\n{@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.</p>",
                "url": "module-ol_source_Vector-VectorSource#forEachFeatureIntersectingExtent"
            },
            {
                "name": "get",
                "type": 8,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Vector-VectorSource#get"
            },
            {
                "name": "getAttributions",
                "type": 9,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 10,
                "url": "module-ol_source_Vector-VectorSource#getAttributionsCollapsible"
            },
            {
                "name": "getClosestFeatureToCoordinate",
                "type": 11,
                "description": "<p>Get the closest feature to the provided coordinate.</p>\n<p>This method is not available when the source is configured with\n<code>useSpatialIndex</code> set to <code>false</code>.</p>",
                "url": "module-ol_source_Vector-VectorSource#getClosestFeatureToCoordinate"
            },
            {
                "name": "getExtent",
                "type": 12,
                "description": "<p>Get the extent of the features currently in the source.</p>\n<p>This method is not available when the source is configured with\n<code>useSpatialIndex</code> set to <code>false</code>.</p>",
                "url": "module-ol_source_Vector-VectorSource#getExtent"
            },
            {
                "name": "getFeatureById",
                "type": 13,
                "description": "<p>Get a feature by its identifier (the value returned by feature.getId()).\nNote that the index treats string and numeric identifiers as the same.  So\n<code>source.getFeatureById(2)</code> will return a feature with id <code>'2'</code> or <code>2</code>.</p>",
                "url": "module-ol_source_Vector-VectorSource#getFeatureById"
            },
            {
                "name": "getFeatures",
                "type": 14,
                "description": "<p>Get a snapshot of the features currently on the source in random order. The returned array\nis a copy, the features are references to the features in the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#getFeatures"
            },
            {
                "name": "getFeaturesAtCoordinate",
                "type": 15,
                "description": "<p>Get all features whose geometry intersects the provided coordinate.</p>",
                "url": "module-ol_source_Vector-VectorSource#getFeaturesAtCoordinate"
            },
            {
                "name": "getFeaturesCollection",
                "type": 16,
                "description": "<p>Get the features collection associated with this source. Will be <code>null</code>\nunless the source was configured with <code>useSpatialIndex</code> set to <code>false</code>, or\nwith an {@link module:ol/Collection~Collection} as <code>features</code>.</p>",
                "url": "module-ol_source_Vector-VectorSource#getFeaturesCollection"
            },
            {
                "name": "getFeaturesInExtent",
                "type": 17,
                "description": "<p>Get all features whose bounding box intersects the provided extent.  Note that this returns an array of\nall features intersecting the given extent in random order (so it may include\nfeatures whose geometries do not intersect the extent).</p>\n<p>When <code>useSpatialIndex</code> is set to false, this method will return all\nfeatures.</p>",
                "url": "module-ol_source_Vector-VectorSource#getFeaturesInExtent"
            },
            {
                "name": "getFormat",
                "type": 18,
                "description": "<p>Get the format associated with this source.</p>",
                "url": "module-ol_source_Vector-VectorSource#getFormat"
            },
            {
                "name": "getKeys",
                "type": 19,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Vector-VectorSource#getKeys"
            },
            {
                "name": "getProjection",
                "type": 20,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#getProjection"
            },
            {
                "name": "getProperties",
                "type": 21,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Vector-VectorSource#getProperties"
            },
            {
                "name": "getRevision",
                "type": 22,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Vector-VectorSource#getRevision"
            },
            {
                "name": "getState",
                "type": 23,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Vector-VectorSource#getState"
            },
            {
                "name": "getUrl",
                "type": 24,
                "description": "<p>Get the url associated with this source.</p>",
                "url": "module-ol_source_Vector-VectorSource#getUrl"
            },
            {
                "name": "hasFeature",
                "type": 25,
                "description": "<p>Returns true if the feature is contained within the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#hasFeature"
            },
            {
                "name": "on",
                "type": 26,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Vector-VectorSource#on"
            },
            {
                "name": "once",
                "type": 27,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Vector-VectorSource#once"
            },
            {
                "name": "refresh",
                "type": 28,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Vector-VectorSource#refresh"
            },
            {
                "name": "removeFeature",
                "type": 29,
                "description": "<p>Remove a single feature from the source.  If you want to remove all features\nat once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method\ninstead.</p>",
                "url": "module-ol_source_Vector-VectorSource#removeFeature"
            },
            {
                "name": "removeLoadedExtent",
                "type": 30,
                "description": "<p>Remove an extent from the list of loaded extents.</p>",
                "url": "module-ol_source_Vector-VectorSource#removeLoadedExtent"
            },
            {
                "name": "set",
                "type": 31,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Vector-VectorSource#set"
            },
            {
                "name": "setAttributions",
                "type": 32,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Vector-VectorSource#setAttributions"
            },
            {
                "name": "setLoader",
                "type": 33,
                "description": "<p>Set the new loader of the source. The next render cycle will use the\nnew loader.</p>",
                "url": "module-ol_source_Vector-VectorSource#setLoader"
            },
            {
                "name": "setProperties",
                "type": 34,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Vector-VectorSource#setProperties"
            },
            {
                "name": "setUrl",
                "type": 35,
                "description": "<p>Points the source to a new url. The next render cycle will use the new url.</p>",
                "url": "module-ol_source_Vector-VectorSource#setUrl"
            },
            {
                "name": "un",
                "type": 36,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Vector-VectorSource#un"
            },
            {
                "name": "unset",
                "type": 37,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Vector-VectorSource#unset"
            }
        ],
        "events": []
    },
    {
        "name": "VectorSourceEvent",
        "description": "[CLASS]",
        "url": "module-ol_source_Vector#.VectorSourceEvent",
        "members": [
            {
                "name": "feature",
                "type": 0,
                "description": "<p>The added or removed feature for the <code>ADDFEATURE</code> and <code>REMOVEFEATURE</code> events, <code>undefined</code> otherwise.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#feature"
            },
            {
                "name": "features",
                "type": 1,
                "description": "<p>The loaded features for the <code>FEATURESLOADED</code> event, <code>undefined</code> otherwise.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#features"
            },
            {
                "name": "target",
                "type": 2,
                "description": "<p>The event target.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#target"
            },
            {
                "name": "type",
                "type": 3,
                "description": "<p>The event type.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#type"
            }
        ],
        "methods": [
            {
                "name": "preventDefault",
                "type": 0,
                "description": "<p>Prevent default. This means that no emulated <code>click</code>, <code>singleclick</code> or <code>doubleclick</code> events\nwill be fired.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#preventDefault"
            },
            {
                "name": "stopPropagation",
                "type": 1,
                "description": "<p>Stop event propagation.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#stopPropagation"
            }
        ],
        "events": [
            {
                "name": "addfeature",
                "type": 0,
                "description": "<p>Triggered when a feature is added to the source.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:addfeature"
            },
            {
                "name": "change",
                "type": 1,
                "description": "<p>Generic change event. Triggered when the revision counter is increased.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:change"
            },
            {
                "name": "changefeature",
                "type": 2,
                "description": "<p>Triggered when a feature is updated.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:changefeature"
            },
            {
                "name": "clear",
                "type": 3,
                "description": "<p>Triggered when the clear method is called on the source.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:clear"
            },
            {
                "name": "error",
                "type": 4,
                "description": "<p>Generic error event. Triggered when an error occurs.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:error"
            },
            {
                "name": "featuresloadend",
                "type": 5,
                "description": "<p>Triggered when features finishes loading.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:featuresloadend"
            },
            {
                "name": "featuresloaderror",
                "type": 6,
                "description": "<p>Triggered if feature loading results in an error.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:featuresloaderror"
            },
            {
                "name": "featuresloadstart",
                "type": 7,
                "description": "<p>Triggered when features starts loading.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:featuresloadstart"
            },
            {
                "name": "removefeature",
                "type": 8,
                "description": "<p>Triggered when a feature is removed from the source.\nSee {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.</p>",
                "url": "module-ol_source_Vector#.VectorSourceEvent#event:removefeature"
            }
        ]
    },
    {
        "name": "VectorTile",
        "description": "[CLASS]",
        "url": "module-ol_source_VectorTile-VectorTile",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>clear {@link module:ol/TileCache~TileCache} and delete all source tiles</p>",
                "url": "module-ol_source_VectorTile-VectorTile#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_VectorTile-VectorTile#getAttributionsCollapsible"
            },
            {
                "name": "getFeaturesInExtent",
                "type": 6,
                "description": "<p>Get features whose bounding box intersects the provided extent. Only features for cached\ntiles for the last rendered zoom level are available in the source. So this method is only\nsuitable for requesting tiles for extents that are currently rendered.</p>\n<p>Features are returned in random tile order and as they are included in the tiles. This means\nthey can be clipped, duplicated across tiles, and simplified to the render resolution.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getFeaturesInExtent"
            },
            {
                "name": "getKeys",
                "type": 7,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getKeys"
            },
            {
                "name": "getProjection",
                "type": 8,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getProjection"
            },
            {
                "name": "getProperties",
                "type": 9,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getProperties"
            },
            {
                "name": "getRevision",
                "type": 10,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getRevision"
            },
            {
                "name": "getState",
                "type": 11,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getState"
            },
            {
                "name": "getTileGrid",
                "type": 12,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 13,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 14,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 15,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#getUrls"
            },
            {
                "name": "on",
                "type": 16,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#on"
            },
            {
                "name": "once",
                "type": 17,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#once"
            },
            {
                "name": "refresh",
                "type": 18,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#refresh"
            },
            {
                "name": "set",
                "type": 19,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#set"
            },
            {
                "name": "setAttributions",
                "type": 20,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 21,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_VectorTile-VectorTile#setProperties"
            },
            {
                "name": "setTileLoadFunction",
                "type": 22,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 23,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 24,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#setUrl"
            },
            {
                "name": "setUrls",
                "type": 25,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#setUrls"
            },
            {
                "name": "un",
                "type": 26,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#un"
            },
            {
                "name": "unset",
                "type": 27,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_VectorTile-VectorTile#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/WMSServerType",
        "description": "[MODULE]",
        "url": "module-ol_source_WMSServerType",
        "members": [
            {
                "name": "module:ol/source/WMSServerType",
                "type": 0,
                "description": "<p>Available server types: <code>'carmentaserver'</code>, <code>'geoserver'</code>, <code>'mapserver'</code>,\n    <code>'qgis'</code>. These are servers that have vendor parameters beyond the WMS\n    specification that OpenLayers can make use of.</p>",
                "url": "module-ol_source_WMSServerType"
            },
            {
                "name": "CARMENTA_SERVER",
                "type": 1,
                "description": "<p>HiDPI support for <a href=\"https://www.carmenta.com/en/products/carmenta-server\">Carmenta Server</a></p>",
                "url": "module-ol_source_WMSServerType#.CARMENTA_SERVER"
            },
            {
                "name": "GEOSERVER",
                "type": 2,
                "description": "<p>HiDPI support for <a href=\"https://geoserver.org/\">GeoServer</a></p>",
                "url": "module-ol_source_WMSServerType#.GEOSERVER"
            },
            {
                "name": "MAPSERVER",
                "type": 3,
                "description": "<p>HiDPI support for <a href=\"https://mapserver.org/\">MapServer</a></p>",
                "url": "module-ol_source_WMSServerType#.MAPSERVER"
            },
            {
                "name": "QGIS",
                "type": 4,
                "description": "<p>HiDPI support for <a href=\"https://qgis.org/\">QGIS</a></p>",
                "url": "module-ol_source_WMSServerType#.QGIS"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "WMTS",
        "description": "[CLASS]",
        "url": "module-ol_source_WMTS-WMTS",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_WMTS-WMTS#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_WMTS-WMTS#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_WMTS-WMTS#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_WMTS-WMTS#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_WMTS-WMTS#getAttributionsCollapsible"
            },
            {
                "name": "getDimensions",
                "type": 6,
                "description": "<p>Get the dimensions, i.e. those passed to the constructor through the\n&quot;dimensions&quot; option, and possibly updated using the updateDimensions\nmethod.</p>",
                "url": "module-ol_source_WMTS-WMTS#getDimensions"
            },
            {
                "name": "getFormat",
                "type": 7,
                "description": "<p>Return the image format of the WMTS source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getFormat"
            },
            {
                "name": "getKeys",
                "type": 8,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_WMTS-WMTS#getKeys"
            },
            {
                "name": "getLayer",
                "type": 9,
                "description": "<p>Return the layer of the WMTS source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getLayer"
            },
            {
                "name": "getMatrixSet",
                "type": 10,
                "description": "<p>Return the matrix set of the WMTS source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getMatrixSet"
            },
            {
                "name": "getProjection",
                "type": 11,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getProjection"
            },
            {
                "name": "getProperties",
                "type": 12,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_WMTS-WMTS#getProperties"
            },
            {
                "name": "getRequestEncoding",
                "type": 13,
                "description": "<p>Return the request encoding, either &quot;KVP&quot; or &quot;REST&quot;.</p>",
                "url": "module-ol_source_WMTS-WMTS#getRequestEncoding"
            },
            {
                "name": "getRevision",
                "type": 14,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_WMTS-WMTS#getRevision"
            },
            {
                "name": "getState",
                "type": 15,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_WMTS-WMTS#getState"
            },
            {
                "name": "getStyle",
                "type": 16,
                "description": "<p>Return the style of the WMTS source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getStyle"
            },
            {
                "name": "getTileGrid",
                "type": 17,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 18,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 19,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 20,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_WMTS-WMTS#getUrls"
            },
            {
                "name": "getVersion",
                "type": 21,
                "description": "<p>Return the version of the WMTS source.</p>",
                "url": "module-ol_source_WMTS-WMTS#getVersion"
            },
            {
                "name": "on",
                "type": 22,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_WMTS-WMTS#on"
            },
            {
                "name": "once",
                "type": 23,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_WMTS-WMTS#once"
            },
            {
                "name": "refresh",
                "type": 24,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_WMTS-WMTS#refresh"
            },
            {
                "name": "set",
                "type": 25,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_WMTS-WMTS#set"
            },
            {
                "name": "setAttributions",
                "type": 26,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 27,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_WMTS-WMTS#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 28,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_WMTS-WMTS#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 29,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_WMTS-WMTS#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 30,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 31,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_WMTS-WMTS#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 32,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_WMTS-WMTS#setUrl"
            },
            {
                "name": "un",
                "type": 33,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_WMTS-WMTS#un"
            },
            {
                "name": "unset",
                "type": 34,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_WMTS-WMTS#unset"
            },
            {
                "name": "updateDimensions",
                "type": 35,
                "description": "<p>Update the dimensions.</p>",
                "url": "module-ol_source_WMTS-WMTS#updateDimensions"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/WMTS",
        "description": "[MODULE]",
        "url": "module-ol_source_WMTS",
        "members": [],
        "methods": [
            {
                "name": "optionsFromCapabilities",
                "type": 0,
                "description": "<p>Generate source options from a capabilities object.</p>",
                "url": "module-ol_source_WMTS#.optionsFromCapabilities"
            }
        ],
        "events": []
    },
    {
        "name": "ol/source/WMTSRequestEncoding",
        "description": "[MODULE]",
        "url": "module-ol_source_WMTSRequestEncoding",
        "members": [
            {
                "name": "module:ol/source/WMTSRequestEncoding",
                "type": 0,
                "description": "<p>Request encoding. One of 'KVP', 'REST'.</p>",
                "url": "module-ol_source_WMTSRequestEncoding"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "XYZ",
        "description": "[CLASS]",
        "url": "module-ol_source_XYZ-XYZ",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_XYZ-XYZ#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_XYZ-XYZ#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_XYZ-XYZ#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_XYZ-XYZ#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_XYZ-XYZ#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_XYZ-XYZ#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_XYZ-XYZ#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_XYZ-XYZ#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_XYZ-XYZ#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_XYZ-XYZ#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_XYZ-XYZ#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_XYZ-XYZ#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_XYZ-XYZ#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_XYZ-XYZ#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_XYZ-XYZ#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_XYZ-XYZ#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_XYZ-XYZ#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_XYZ-XYZ#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_XYZ-XYZ#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_XYZ-XYZ#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_XYZ-XYZ#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_XYZ-XYZ#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_XYZ-XYZ#unset"
            }
        ],
        "events": []
    },
    {
        "name": "Zoomify",
        "description": "[CLASS]",
        "url": "module-ol_source_Zoomify-Zoomify",
        "members": [],
        "methods": [
            {
                "name": "changed",
                "type": 0,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#changed"
            },
            {
                "name": "clear",
                "type": 1,
                "description": "<p>Remove all cached tiles from the source. The next render cycle will fetch new tiles.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#clear"
            },
            {
                "name": "dispatchEvent",
                "type": 2,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#dispatchEvent"
            },
            {
                "name": "get",
                "type": 3,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#get"
            },
            {
                "name": "getAttributions",
                "type": 4,
                "description": "<p>Get the attribution function for the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getAttributions"
            },
            {
                "name": "getAttributionsCollapsible",
                "type": 5,
                "url": "module-ol_source_Zoomify-Zoomify#getAttributionsCollapsible"
            },
            {
                "name": "getKeys",
                "type": 6,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getKeys"
            },
            {
                "name": "getProjection",
                "type": 7,
                "description": "<p>Get the projection of the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getProjection"
            },
            {
                "name": "getProperties",
                "type": 8,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getProperties"
            },
            {
                "name": "getRevision",
                "type": 9,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getRevision"
            },
            {
                "name": "getState",
                "type": 10,
                "description": "<p>Get the state of the source, see {@link module:ol/source/State~State} for possible states.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getState"
            },
            {
                "name": "getTileGrid",
                "type": 11,
                "description": "<p>Return the tile grid of the tile source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getTileGrid"
            },
            {
                "name": "getTileLoadFunction",
                "type": 12,
                "description": "<p>Return the tile load function of the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getTileLoadFunction"
            },
            {
                "name": "getTileUrlFunction",
                "type": 13,
                "description": "<p>Return the tile URL function of the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getTileUrlFunction"
            },
            {
                "name": "getUrls",
                "type": 14,
                "description": "<p>Return the URLs used for this source.\nWhen a tileUrlFunction is used instead of url or urls,\nnull will be returned.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#getUrls"
            },
            {
                "name": "on",
                "type": 15,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#on"
            },
            {
                "name": "once",
                "type": 16,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#once"
            },
            {
                "name": "refresh",
                "type": 17,
                "description": "<p>Refreshes the source. The source will be cleared, and data from the server will be reloaded.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#refresh"
            },
            {
                "name": "set",
                "type": 18,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#set"
            },
            {
                "name": "setAttributions",
                "type": 19,
                "description": "<p>Set the attributions of the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setAttributions"
            },
            {
                "name": "setProperties",
                "type": 20,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setProperties"
            },
            {
                "name": "setRenderReprojectionEdges",
                "type": 21,
                "description": "<p>Sets whether to render reprojection edges or not (usually for debugging).</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setRenderReprojectionEdges"
            },
            {
                "name": "setTileGridForProjection",
                "type": 22,
                "description": "<p>Sets the tile grid to use when reprojecting the tiles to the given\nprojection instead of the default tile grid for the projection.</p>\n<p>This can be useful when the default tile grid cannot be created\n(e.g. projection has no extent defined) or\nfor optimization reasons (custom tile size, resolutions, ...).</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setTileGridForProjection"
            },
            {
                "name": "setTileLoadFunction",
                "type": 23,
                "description": "<p>Set the tile load function of the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setTileLoadFunction"
            },
            {
                "name": "setTileUrlFunction",
                "type": 24,
                "description": "<p>Set the tile URL function of the source.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setTileUrlFunction"
            },
            {
                "name": "setUrl",
                "type": 25,
                "description": "<p>Set the URL to use for requests.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setUrl"
            },
            {
                "name": "setUrls",
                "type": 26,
                "description": "<p>Set the URLs to use for requests.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#setUrls"
            },
            {
                "name": "un",
                "type": 27,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#un"
            },
            {
                "name": "unset",
                "type": 28,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_source_Zoomify-Zoomify#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/sphere",
        "description": "[MODULE]",
        "url": "module-ol_sphere",
        "members": [],
        "methods": [
            {
                "name": "getArea",
                "type": 0,
                "description": "<p>Get the spherical area of a geometry.  This is the area (in meters) assuming\nthat polygon edges are segments of great circles on a sphere.</p>",
                "url": "module-ol_sphere#.getArea"
            },
            {
                "name": "getDistance",
                "type": 1,
                "description": "<p>Get the great circle distance (in meters) between two geographic coordinates.</p>",
                "url": "module-ol_sphere#.getDistance"
            },
            {
                "name": "getLength",
                "type": 2,
                "description": "<p>Get the spherical length of a geometry.  This length is the sum of the\ngreat circle distances between coordinates.  For polygons, the length is\nthe sum of all rings.  For points, the length is zero.  For multi-part\ngeometries, the length is the sum of the length of each part.</p>",
                "url": "module-ol_sphere#.getLength"
            }
        ],
        "events": []
    },
    {
        "name": "LRUCache",
        "description": "[CLASS]",
        "url": "module-ol_structs_LRUCache-LRUCache",
        "members": [],
        "methods": [
            {
                "name": "setSize",
                "type": 0,
                "description": "<p>Set a maximum number of entries for the cache.</p>",
                "url": "module-ol_structs_LRUCache-LRUCache#setSize"
            }
        ],
        "events": []
    },
    {
        "name": "CircleStyle",
        "description": "[CLASS]",
        "url": "module-ol_style_Circle-CircleStyle",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style.</p>",
                "url": "module-ol_style_Circle-CircleStyle#clone"
            },
            {
                "name": "getAnchor",
                "type": 1,
                "description": "<p>Get the anchor point in pixels. The anchor determines the center point for the\nsymbolizer.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getAnchor"
            },
            {
                "name": "getAngle",
                "type": 2,
                "description": "<p>Get the angle used in generating the shape.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getAngle"
            },
            {
                "name": "getDeclutterMode",
                "type": 3,
                "description": "<p>Get the declutter mode of the shape</p>",
                "url": "module-ol_style_Circle-CircleStyle#getDeclutterMode"
            },
            {
                "name": "getDisplacement",
                "type": 4,
                "description": "<p>Get the displacement of the shape</p>",
                "url": "module-ol_style_Circle-CircleStyle#getDisplacement"
            },
            {
                "name": "getFill",
                "type": 5,
                "description": "<p>Get the fill style for the shape.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getFill"
            },
            {
                "name": "getImage",
                "type": 6,
                "description": "<p>Get the image icon.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getImage"
            },
            {
                "name": "getOpacity",
                "type": 7,
                "description": "<p>Get the symbolizer opacity.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getOpacity"
            },
            {
                "name": "getOrigin",
                "type": 8,
                "description": "<p>Get the origin of the symbolizer.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getOrigin"
            },
            {
                "name": "getPoints",
                "type": 9,
                "description": "<p>Get the number of points for generating the shape.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getPoints"
            },
            {
                "name": "getRadius",
                "type": 10,
                "description": "<p>Get the (primary) radius for the shape.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getRadius"
            },
            {
                "name": "getRadius2",
                "type": 11,
                "description": "<p>Get the secondary radius for the shape.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getRadius2"
            },
            {
                "name": "getRotateWithView",
                "type": 12,
                "description": "<p>Determine whether the symbolizer rotates with the map.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getRotateWithView"
            },
            {
                "name": "getRotation",
                "type": 13,
                "description": "<p>Get the symoblizer rotation.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getRotation"
            },
            {
                "name": "getScale",
                "type": 14,
                "description": "<p>Get the symbolizer scale.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getScale"
            },
            {
                "name": "getSize",
                "type": 15,
                "description": "<p>Get the size of the symbolizer (in pixels).</p>",
                "url": "module-ol_style_Circle-CircleStyle#getSize"
            },
            {
                "name": "getStroke",
                "type": 16,
                "description": "<p>Get the stroke style for the shape.</p>",
                "url": "module-ol_style_Circle-CircleStyle#getStroke"
            },
            {
                "name": "setDisplacement",
                "type": 17,
                "description": "<p>Set the displacement.</p>",
                "url": "module-ol_style_Circle-CircleStyle#setDisplacement"
            },
            {
                "name": "setOpacity",
                "type": 18,
                "description": "<p>Set the opacity.</p>",
                "url": "module-ol_style_Circle-CircleStyle#setOpacity"
            },
            {
                "name": "setRadius",
                "type": 19,
                "description": "<p>Set the circle radius.</p>",
                "url": "module-ol_style_Circle-CircleStyle#setRadius"
            },
            {
                "name": "setRotateWithView",
                "type": 20,
                "description": "<p>Set whether to rotate the style with the view.</p>",
                "url": "module-ol_style_Circle-CircleStyle#setRotateWithView"
            },
            {
                "name": "setRotation",
                "type": 21,
                "description": "<p>Set the rotation.</p>",
                "url": "module-ol_style_Circle-CircleStyle#setRotation"
            },
            {
                "name": "setScale",
                "type": 22,
                "description": "<p>Set the scale.</p>",
                "url": "module-ol_style_Circle-CircleStyle#setScale"
            }
        ],
        "events": []
    },
    {
        "name": "ol/style/expressions",
        "description": "[MODULE]",
        "url": "module-ol_style_expressions",
        "members": [
            {
                "name": "ValueTypes",
                "type": 0,
                "description": "<p>Possible inferred types from a given value or expression.\nNote: these are binary flags.</p>",
                "url": "module-ol_style_expressions#.ValueTypes"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "Fill",
        "description": "[CLASS]",
        "url": "module-ol_style_Fill-Fill",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.</p>",
                "url": "module-ol_style_Fill-Fill#clone"
            },
            {
                "name": "getColor",
                "type": 1,
                "description": "<p>Get the fill color.</p>",
                "url": "module-ol_style_Fill-Fill#getColor"
            },
            {
                "name": "setColor",
                "type": 2,
                "description": "<p>Set the color.</p>",
                "url": "module-ol_style_Fill-Fill#setColor"
            }
        ],
        "events": []
    },
    {
        "name": "Icon",
        "description": "[CLASS]",
        "url": "module-ol_style_Icon-Icon",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style. The underlying Image/HTMLCanvasElement is not cloned.</p>",
                "url": "module-ol_style_Icon-Icon#clone"
            },
            {
                "name": "getAnchor",
                "type": 1,
                "description": "<p>Get the anchor point in pixels. The anchor determines the center point for the\nsymbolizer.</p>",
                "url": "module-ol_style_Icon-Icon#getAnchor"
            },
            {
                "name": "getColor",
                "type": 2,
                "description": "<p>Get the icon color.</p>",
                "url": "module-ol_style_Icon-Icon#getColor"
            },
            {
                "name": "getDeclutterMode",
                "type": 3,
                "description": "<p>Get the declutter mode of the shape</p>",
                "url": "module-ol_style_Icon-Icon#getDeclutterMode"
            },
            {
                "name": "getDisplacement",
                "type": 4,
                "description": "<p>Get the displacement of the shape</p>",
                "url": "module-ol_style_Icon-Icon#getDisplacement"
            },
            {
                "name": "getImage",
                "type": 5,
                "description": "<p>Get the image icon.</p>",
                "url": "module-ol_style_Icon-Icon#getImage"
            },
            {
                "name": "getOpacity",
                "type": 6,
                "description": "<p>Get the symbolizer opacity.</p>",
                "url": "module-ol_style_Icon-Icon#getOpacity"
            },
            {
                "name": "getOrigin",
                "type": 7,
                "description": "<p>Get the origin of the symbolizer.</p>",
                "url": "module-ol_style_Icon-Icon#getOrigin"
            },
            {
                "name": "getPixelRatio",
                "type": 8,
                "description": "<p>Get the pixel ratio.</p>",
                "url": "module-ol_style_Icon-Icon#getPixelRatio"
            },
            {
                "name": "getRotateWithView",
                "type": 9,
                "description": "<p>Determine whether the symbolizer rotates with the map.</p>",
                "url": "module-ol_style_Icon-Icon#getRotateWithView"
            },
            {
                "name": "getRotation",
                "type": 10,
                "description": "<p>Get the symoblizer rotation.</p>",
                "url": "module-ol_style_Icon-Icon#getRotation"
            },
            {
                "name": "getScale",
                "type": 11,
                "description": "<p>Get the symbolizer scale.</p>",
                "url": "module-ol_style_Icon-Icon#getScale"
            },
            {
                "name": "getSize",
                "type": 12,
                "description": "<p>Get the size of the icon (in pixels).</p>",
                "url": "module-ol_style_Icon-Icon#getSize"
            },
            {
                "name": "getSrc",
                "type": 13,
                "description": "<p>Get the image URL.</p>",
                "url": "module-ol_style_Icon-Icon#getSrc"
            },
            {
                "name": "load",
                "type": 14,
                "description": "<p>Load not yet loaded URI.\nWhen rendering a feature with an icon style, the vector renderer will\nautomatically call this method. However, you might want to call this\nmethod yourself for preloading or other purposes.</p>",
                "url": "module-ol_style_Icon-Icon#load"
            },
            {
                "name": "setAnchor",
                "type": 15,
                "description": "<p>Set the anchor point. The anchor determines the center point for the\nsymbolizer.</p>",
                "url": "module-ol_style_Icon-Icon#setAnchor"
            },
            {
                "name": "setDisplacement",
                "type": 16,
                "description": "<p>Set the displacement.</p>",
                "url": "module-ol_style_Icon-Icon#setDisplacement"
            },
            {
                "name": "setOpacity",
                "type": 17,
                "description": "<p>Set the opacity.</p>",
                "url": "module-ol_style_Icon-Icon#setOpacity"
            },
            {
                "name": "setRotateWithView",
                "type": 18,
                "description": "<p>Set whether to rotate the style with the view.</p>",
                "url": "module-ol_style_Icon-Icon#setRotateWithView"
            },
            {
                "name": "setRotation",
                "type": 19,
                "description": "<p>Set the rotation.</p>",
                "url": "module-ol_style_Icon-Icon#setRotation"
            },
            {
                "name": "setScale",
                "type": 20,
                "description": "<p>Set the scale.</p>",
                "url": "module-ol_style_Icon-Icon#setScale"
            }
        ],
        "events": []
    },
    {
        "name": "ol/style/IconAnchorUnits",
        "description": "[MODULE]",
        "url": "module-ol_style_IconAnchorUnits",
        "members": [
            {
                "name": "module:ol/style/IconAnchorUnits",
                "type": 0,
                "description": "<p>Icon anchor units. One of 'fraction', 'pixels'.</p>",
                "url": "module-ol_style_IconAnchorUnits"
            },
            {
                "name": "FRACTION",
                "type": 1,
                "description": "<p>Anchor is a fraction</p>",
                "url": "module-ol_style_IconAnchorUnits#.FRACTION"
            },
            {
                "name": "PIXELS",
                "type": 2,
                "description": "<p>Anchor is in pixels</p>",
                "url": "module-ol_style_IconAnchorUnits#.PIXELS"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "IconImageCache",
        "description": "[CLASS]",
        "url": "module-ol_style_IconImageCache-IconImageCache",
        "members": [],
        "methods": [
            {
                "name": "setSize",
                "type": 0,
                "description": "<p>Set the cache size of the icon cache. Default is <code>32</code>. Change this value when\nyour map uses more than 32 different icon images and you are not caching icon\nstyles on the application level.</p>",
                "url": "module-ol_style_IconImageCache-IconImageCache#setSize"
            }
        ],
        "events": []
    },
    {
        "name": "ol/style/IconImageCache",
        "description": "[MODULE]",
        "url": "module-ol_style_IconImageCache",
        "members": [
            {
                "name": "shared",
                "type": 0,
                "description": "<p>The {@link module:ol/style/IconImageCache~IconImageCache} for\n{@link module:ol/style/Icon~Icon} images.</p>",
                "url": "module-ol_style_IconImageCache#.shared"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/style/IconOrigin",
        "description": "[MODULE]",
        "url": "module-ol_style_IconOrigin",
        "members": [
            {
                "name": "module:ol/style/IconOrigin",
                "type": 0,
                "description": "<p>Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.</p>",
                "url": "module-ol_style_IconOrigin"
            },
            {
                "name": "BOTTOM_LEFT",
                "type": 1,
                "description": "<p>Origin is at bottom left</p>",
                "url": "module-ol_style_IconOrigin#.BOTTOM_LEFT"
            },
            {
                "name": "BOTTOM_RIGHT",
                "type": 2,
                "description": "<p>Origin is at bottom right</p>",
                "url": "module-ol_style_IconOrigin#.BOTTOM_RIGHT"
            },
            {
                "name": "TOP_LEFT",
                "type": 3,
                "description": "<p>Origin is at top left</p>",
                "url": "module-ol_style_IconOrigin#.TOP_LEFT"
            },
            {
                "name": "TOP_RIGHT",
                "type": 4,
                "description": "<p>Origin is at top right</p>",
                "url": "module-ol_style_IconOrigin#.TOP_RIGHT"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ImageStyle",
        "description": "[CLASS]",
        "url": "module-ol_style_Image-ImageStyle",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style.</p>",
                "url": "module-ol_style_Image-ImageStyle#clone"
            },
            {
                "name": "getDeclutterMode",
                "type": 1,
                "description": "<p>Get the declutter mode of the shape</p>",
                "url": "module-ol_style_Image-ImageStyle#getDeclutterMode"
            },
            {
                "name": "getDisplacement",
                "type": 2,
                "description": "<p>Get the displacement of the shape</p>",
                "url": "module-ol_style_Image-ImageStyle#getDisplacement"
            },
            {
                "name": "getOpacity",
                "type": 3,
                "description": "<p>Get the symbolizer opacity.</p>",
                "url": "module-ol_style_Image-ImageStyle#getOpacity"
            },
            {
                "name": "getRotateWithView",
                "type": 4,
                "description": "<p>Determine whether the symbolizer rotates with the map.</p>",
                "url": "module-ol_style_Image-ImageStyle#getRotateWithView"
            },
            {
                "name": "getRotation",
                "type": 5,
                "description": "<p>Get the symoblizer rotation.</p>",
                "url": "module-ol_style_Image-ImageStyle#getRotation"
            },
            {
                "name": "getScale",
                "type": 6,
                "description": "<p>Get the symbolizer scale.</p>",
                "url": "module-ol_style_Image-ImageStyle#getScale"
            },
            {
                "name": "setDisplacement",
                "type": 7,
                "description": "<p>Set the displacement.</p>",
                "url": "module-ol_style_Image-ImageStyle#setDisplacement"
            },
            {
                "name": "setOpacity",
                "type": 8,
                "description": "<p>Set the opacity.</p>",
                "url": "module-ol_style_Image-ImageStyle#setOpacity"
            },
            {
                "name": "setRotateWithView",
                "type": 9,
                "description": "<p>Set whether to rotate the style with the view.</p>",
                "url": "module-ol_style_Image-ImageStyle#setRotateWithView"
            },
            {
                "name": "setRotation",
                "type": 10,
                "description": "<p>Set the rotation.</p>",
                "url": "module-ol_style_Image-ImageStyle#setRotation"
            },
            {
                "name": "setScale",
                "type": 11,
                "description": "<p>Set the scale.</p>",
                "url": "module-ol_style_Image-ImageStyle#setScale"
            }
        ],
        "events": []
    },
    {
        "name": "RegularShape",
        "description": "[CLASS]",
        "url": "module-ol_style_RegularShape-RegularShape",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#clone"
            },
            {
                "name": "getAnchor",
                "type": 1,
                "description": "<p>Get the anchor point in pixels. The anchor determines the center point for the\nsymbolizer.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getAnchor"
            },
            {
                "name": "getAngle",
                "type": 2,
                "description": "<p>Get the angle used in generating the shape.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getAngle"
            },
            {
                "name": "getDeclutterMode",
                "type": 3,
                "description": "<p>Get the declutter mode of the shape</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getDeclutterMode"
            },
            {
                "name": "getDisplacement",
                "type": 4,
                "description": "<p>Get the displacement of the shape</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getDisplacement"
            },
            {
                "name": "getFill",
                "type": 5,
                "description": "<p>Get the fill style for the shape.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getFill"
            },
            {
                "name": "getImage",
                "type": 6,
                "description": "<p>Get the image icon.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getImage"
            },
            {
                "name": "getOpacity",
                "type": 7,
                "description": "<p>Get the symbolizer opacity.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getOpacity"
            },
            {
                "name": "getOrigin",
                "type": 8,
                "description": "<p>Get the origin of the symbolizer.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getOrigin"
            },
            {
                "name": "getPoints",
                "type": 9,
                "description": "<p>Get the number of points for generating the shape.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getPoints"
            },
            {
                "name": "getRadius",
                "type": 10,
                "description": "<p>Get the (primary) radius for the shape.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getRadius"
            },
            {
                "name": "getRadius2",
                "type": 11,
                "description": "<p>Get the secondary radius for the shape.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getRadius2"
            },
            {
                "name": "getRotateWithView",
                "type": 12,
                "description": "<p>Determine whether the symbolizer rotates with the map.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getRotateWithView"
            },
            {
                "name": "getRotation",
                "type": 13,
                "description": "<p>Get the symoblizer rotation.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getRotation"
            },
            {
                "name": "getScale",
                "type": 14,
                "description": "<p>Get the symbolizer scale.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getScale"
            },
            {
                "name": "getSize",
                "type": 15,
                "description": "<p>Get the size of the symbolizer (in pixels).</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getSize"
            },
            {
                "name": "getStroke",
                "type": 16,
                "description": "<p>Get the stroke style for the shape.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#getStroke"
            },
            {
                "name": "setDisplacement",
                "type": 17,
                "description": "<p>Set the displacement.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#setDisplacement"
            },
            {
                "name": "setOpacity",
                "type": 18,
                "description": "<p>Set the opacity.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#setOpacity"
            },
            {
                "name": "setRotateWithView",
                "type": 19,
                "description": "<p>Set whether to rotate the style with the view.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#setRotateWithView"
            },
            {
                "name": "setRotation",
                "type": 20,
                "description": "<p>Set the rotation.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#setRotation"
            },
            {
                "name": "setScale",
                "type": 21,
                "description": "<p>Set the scale.</p>",
                "url": "module-ol_style_RegularShape-RegularShape#setScale"
            }
        ],
        "events": []
    },
    {
        "name": "ol/style/RegularShape",
        "description": "[MODULE]",
        "url": "module-ol_style_RegularShape",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Stroke",
        "description": "[CLASS]",
        "url": "module-ol_style_Stroke-Stroke",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style.</p>",
                "url": "module-ol_style_Stroke-Stroke#clone"
            },
            {
                "name": "getColor",
                "type": 1,
                "description": "<p>Get the stroke color.</p>",
                "url": "module-ol_style_Stroke-Stroke#getColor"
            },
            {
                "name": "getLineCap",
                "type": 2,
                "description": "<p>Get the line cap type for the stroke.</p>",
                "url": "module-ol_style_Stroke-Stroke#getLineCap"
            },
            {
                "name": "getLineDash",
                "type": 3,
                "description": "<p>Get the line dash style for the stroke.</p>",
                "url": "module-ol_style_Stroke-Stroke#getLineDash"
            },
            {
                "name": "getLineDashOffset",
                "type": 4,
                "description": "<p>Get the line dash offset for the stroke.</p>",
                "url": "module-ol_style_Stroke-Stroke#getLineDashOffset"
            },
            {
                "name": "getLineJoin",
                "type": 5,
                "description": "<p>Get the line join type for the stroke.</p>",
                "url": "module-ol_style_Stroke-Stroke#getLineJoin"
            },
            {
                "name": "getMiterLimit",
                "type": 6,
                "description": "<p>Get the miter limit for the stroke.</p>",
                "url": "module-ol_style_Stroke-Stroke#getMiterLimit"
            },
            {
                "name": "getWidth",
                "type": 7,
                "description": "<p>Get the stroke width.</p>",
                "url": "module-ol_style_Stroke-Stroke#getWidth"
            },
            {
                "name": "setColor",
                "type": 8,
                "description": "<p>Set the color.</p>",
                "url": "module-ol_style_Stroke-Stroke#setColor"
            },
            {
                "name": "setLineCap",
                "type": 9,
                "description": "<p>Set the line cap.</p>",
                "url": "module-ol_style_Stroke-Stroke#setLineCap"
            },
            {
                "name": "setLineDash",
                "type": 10,
                "description": "<p>Set the line dash.</p>\n<p>Please note that Internet Explorer 10 and lower <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility\">do not support</a> the\n<code>setLineDash</code> method on the <code>CanvasRenderingContext2D</code> and therefore this\nproperty will have no visual effect in these browsers.</p>",
                "url": "module-ol_style_Stroke-Stroke#setLineDash"
            },
            {
                "name": "setLineDashOffset",
                "type": 11,
                "description": "<p>Set the line dash offset.</p>",
                "url": "module-ol_style_Stroke-Stroke#setLineDashOffset"
            },
            {
                "name": "setLineJoin",
                "type": 12,
                "description": "<p>Set the line join.</p>",
                "url": "module-ol_style_Stroke-Stroke#setLineJoin"
            },
            {
                "name": "setMiterLimit",
                "type": 13,
                "description": "<p>Set the miter limit.</p>",
                "url": "module-ol_style_Stroke-Stroke#setMiterLimit"
            },
            {
                "name": "setWidth",
                "type": 14,
                "description": "<p>Set the width.</p>",
                "url": "module-ol_style_Stroke-Stroke#setWidth"
            }
        ],
        "events": []
    },
    {
        "name": "Style",
        "description": "[CLASS]",
        "url": "module-ol_style_Style-Style",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style.</p>",
                "url": "module-ol_style_Style-Style#clone"
            },
            {
                "name": "getFill",
                "type": 1,
                "description": "<p>Get the fill style.</p>",
                "url": "module-ol_style_Style-Style#getFill"
            },
            {
                "name": "getGeometry",
                "type": 2,
                "description": "<p>Get the geometry to be rendered.</p>",
                "url": "module-ol_style_Style-Style#getGeometry"
            },
            {
                "name": "getGeometryFunction",
                "type": 3,
                "description": "<p>Get the function used to generate a geometry for rendering.</p>",
                "url": "module-ol_style_Style-Style#getGeometryFunction"
            },
            {
                "name": "getHitDetectionRenderer",
                "type": 4,
                "description": "<p>Get the custom renderer function that was configured with\n{@link #setHitDetectionRenderer} or the <code>hitDetectionRenderer</code> constructor option.</p>",
                "url": "module-ol_style_Style-Style#getHitDetectionRenderer"
            },
            {
                "name": "getImage",
                "type": 5,
                "description": "<p>Get the image style.</p>",
                "url": "module-ol_style_Style-Style#getImage"
            },
            {
                "name": "getRenderer",
                "type": 6,
                "description": "<p>Get the custom renderer function that was configured with\n{@link #setRenderer} or the <code>renderer</code> constructor option.</p>",
                "url": "module-ol_style_Style-Style#getRenderer"
            },
            {
                "name": "getStroke",
                "type": 7,
                "description": "<p>Get the stroke style.</p>",
                "url": "module-ol_style_Style-Style#getStroke"
            },
            {
                "name": "getText",
                "type": 8,
                "description": "<p>Get the text style.</p>",
                "url": "module-ol_style_Style-Style#getText"
            },
            {
                "name": "getZIndex",
                "type": 9,
                "description": "<p>Get the z-index for the style.</p>",
                "url": "module-ol_style_Style-Style#getZIndex"
            },
            {
                "name": "setFill",
                "type": 10,
                "description": "<p>Set the fill style.</p>",
                "url": "module-ol_style_Style-Style#setFill"
            },
            {
                "name": "setGeometry",
                "type": 11,
                "description": "<p>Set a geometry that is rendered instead of the feature's geometry.</p>",
                "url": "module-ol_style_Style-Style#setGeometry"
            },
            {
                "name": "setHitDetectionRenderer",
                "type": 12,
                "description": "<p>Sets a custom renderer function for this style used\nin hit detection.</p>",
                "url": "module-ol_style_Style-Style#setHitDetectionRenderer"
            },
            {
                "name": "setImage",
                "type": 13,
                "description": "<p>Set the image style.</p>",
                "url": "module-ol_style_Style-Style#setImage"
            },
            {
                "name": "setRenderer",
                "type": 14,
                "description": "<p>Sets a custom renderer function for this style. When set, <code>fill</code>, <code>stroke</code>\nand <code>image</code> options of the style will be ignored.</p>",
                "url": "module-ol_style_Style-Style#setRenderer"
            },
            {
                "name": "setStroke",
                "type": 15,
                "description": "<p>Set the stroke style.</p>",
                "url": "module-ol_style_Style-Style#setStroke"
            },
            {
                "name": "setText",
                "type": 16,
                "description": "<p>Set the text style.</p>",
                "url": "module-ol_style_Style-Style#setText"
            },
            {
                "name": "setZIndex",
                "type": 17,
                "description": "<p>Set the z-index.</p>",
                "url": "module-ol_style_Style-Style#setZIndex"
            }
        ],
        "events": []
    },
    {
        "name": "ol/style/Style",
        "description": "[MODULE]",
        "url": "module-ol_style_Style",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "Text",
        "description": "[CLASS]",
        "url": "module-ol_style_Text-Text",
        "members": [],
        "methods": [
            {
                "name": "clone",
                "type": 0,
                "description": "<p>Clones the style.</p>",
                "url": "module-ol_style_Text-Text#clone"
            },
            {
                "name": "getBackgroundFill",
                "type": 1,
                "description": "<p>Get the background fill style for the text.</p>",
                "url": "module-ol_style_Text-Text#getBackgroundFill"
            },
            {
                "name": "getBackgroundStroke",
                "type": 2,
                "description": "<p>Get the background stroke style for the text.</p>",
                "url": "module-ol_style_Text-Text#getBackgroundStroke"
            },
            {
                "name": "getFill",
                "type": 3,
                "description": "<p>Get the fill style for the text.</p>",
                "url": "module-ol_style_Text-Text#getFill"
            },
            {
                "name": "getFont",
                "type": 4,
                "description": "<p>Get the font name.</p>",
                "url": "module-ol_style_Text-Text#getFont"
            },
            {
                "name": "getJustify",
                "type": 5,
                "description": "<p>Get the justification.</p>",
                "url": "module-ol_style_Text-Text#getJustify"
            },
            {
                "name": "getMaxAngle",
                "type": 6,
                "description": "<p>Get the maximum angle between adjacent characters.</p>",
                "url": "module-ol_style_Text-Text#getMaxAngle"
            },
            {
                "name": "getOffsetX",
                "type": 7,
                "description": "<p>Get the x-offset for the text.</p>",
                "url": "module-ol_style_Text-Text#getOffsetX"
            },
            {
                "name": "getOffsetY",
                "type": 8,
                "description": "<p>Get the y-offset for the text.</p>",
                "url": "module-ol_style_Text-Text#getOffsetY"
            },
            {
                "name": "getOverflow",
                "type": 9,
                "description": "<p>Get the <code>overflow</code> configuration.</p>",
                "url": "module-ol_style_Text-Text#getOverflow"
            },
            {
                "name": "getPadding",
                "type": 10,
                "description": "<p>Get the padding for the text.</p>",
                "url": "module-ol_style_Text-Text#getPadding"
            },
            {
                "name": "getPlacement",
                "type": 11,
                "description": "<p>Get the label placement.</p>",
                "url": "module-ol_style_Text-Text#getPlacement"
            },
            {
                "name": "getRotateWithView",
                "type": 12,
                "description": "<p>Determine whether the text rotates with the map.</p>",
                "url": "module-ol_style_Text-Text#getRotateWithView"
            },
            {
                "name": "getRotation",
                "type": 13,
                "description": "<p>Get the text rotation.</p>",
                "url": "module-ol_style_Text-Text#getRotation"
            },
            {
                "name": "getScale",
                "type": 14,
                "description": "<p>Get the text scale.</p>",
                "url": "module-ol_style_Text-Text#getScale"
            },
            {
                "name": "getStroke",
                "type": 15,
                "description": "<p>Get the stroke style for the text.</p>",
                "url": "module-ol_style_Text-Text#getStroke"
            },
            {
                "name": "getText",
                "type": 16,
                "description": "<p>Get the text to be rendered.</p>",
                "url": "module-ol_style_Text-Text#getText"
            },
            {
                "name": "getTextAlign",
                "type": 17,
                "description": "<p>Get the text alignment.</p>",
                "url": "module-ol_style_Text-Text#getTextAlign"
            },
            {
                "name": "getTextBaseline",
                "type": 18,
                "description": "<p>Get the text baseline.</p>",
                "url": "module-ol_style_Text-Text#getTextBaseline"
            },
            {
                "name": "setBackgroundFill",
                "type": 19,
                "description": "<p>Set the background fill.</p>",
                "url": "module-ol_style_Text-Text#setBackgroundFill"
            },
            {
                "name": "setBackgroundStroke",
                "type": 20,
                "description": "<p>Set the background stroke.</p>",
                "url": "module-ol_style_Text-Text#setBackgroundStroke"
            },
            {
                "name": "setFill",
                "type": 21,
                "description": "<p>Set the fill.</p>",
                "url": "module-ol_style_Text-Text#setFill"
            },
            {
                "name": "setFont",
                "type": 22,
                "description": "<p>Set the font.</p>",
                "url": "module-ol_style_Text-Text#setFont"
            },
            {
                "name": "setJustify",
                "type": 23,
                "description": "<p>Set the justification.</p>",
                "url": "module-ol_style_Text-Text#setJustify"
            },
            {
                "name": "setMaxAngle",
                "type": 24,
                "description": "<p>Set the maximum angle between adjacent characters.</p>",
                "url": "module-ol_style_Text-Text#setMaxAngle"
            },
            {
                "name": "setOffsetX",
                "type": 25,
                "description": "<p>Set the x offset.</p>",
                "url": "module-ol_style_Text-Text#setOffsetX"
            },
            {
                "name": "setOffsetY",
                "type": 26,
                "description": "<p>Set the y offset.</p>",
                "url": "module-ol_style_Text-Text#setOffsetY"
            },
            {
                "name": "setOverflow",
                "type": 27,
                "description": "<p>Set the <code>overflow</code> property.</p>",
                "url": "module-ol_style_Text-Text#setOverflow"
            },
            {
                "name": "setPadding",
                "type": 28,
                "description": "<p>Set the padding (<code>[top, right, bottom, left]</code>).</p>",
                "url": "module-ol_style_Text-Text#setPadding"
            },
            {
                "name": "setPlacement",
                "type": 29,
                "description": "<p>Set the text placement.</p>",
                "url": "module-ol_style_Text-Text#setPlacement"
            },
            {
                "name": "setRotateWithView",
                "type": 30,
                "description": "<p>Set whether to rotate the text with the view.</p>",
                "url": "module-ol_style_Text-Text#setRotateWithView"
            },
            {
                "name": "setRotation",
                "type": 31,
                "description": "<p>Set the rotation.</p>",
                "url": "module-ol_style_Text-Text#setRotation"
            },
            {
                "name": "setScale",
                "type": 32,
                "description": "<p>Set the scale.</p>",
                "url": "module-ol_style_Text-Text#setScale"
            },
            {
                "name": "setStroke",
                "type": 33,
                "description": "<p>Set the stroke.</p>",
                "url": "module-ol_style_Text-Text#setStroke"
            },
            {
                "name": "setText",
                "type": 34,
                "description": "<p>Set the text.</p>",
                "url": "module-ol_style_Text-Text#setText"
            },
            {
                "name": "setTextAlign",
                "type": 35,
                "description": "<p>Set the text alignment.</p>",
                "url": "module-ol_style_Text-Text#setTextAlign"
            },
            {
                "name": "setTextBaseline",
                "type": 36,
                "description": "<p>Set the text baseline.</p>",
                "url": "module-ol_style_Text-Text#setTextBaseline"
            }
        ],
        "events": []
    },
    {
        "name": "ol/style/TextPlacement",
        "description": "[MODULE]",
        "url": "module-ol_style_TextPlacement",
        "members": [
            {
                "name": "module:ol/style/TextPlacement",
                "type": 0,
                "description": "<p>Text placement. One of <code>'point'</code>, <code>'line'</code>. Default is <code>'point'</code>. Note that\n<code>'line'</code> requires the underlying geometry to be a {@link module:ol/geom/LineString~LineString},\n{@link module:ol/geom/Polygon~Polygon}, {@link module:ol/geom/MultiLineString~MultiLineString} or\n{@link module:ol/geom/MultiPolygon~MultiPolygon}.</p>",
                "url": "module-ol_style_TextPlacement"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "Tile",
        "description": "[CLASS]",
        "url": "module-ol_Tile-Tile",
        "members": [],
        "methods": [
            {
                "name": "dispatchEvent",
                "type": 0,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_Tile-Tile#dispatchEvent"
            },
            {
                "name": "getTileCoord",
                "type": 1,
                "description": "<p>Get the tile coordinate for this tile.</p>",
                "url": "module-ol_Tile-Tile#getTileCoord"
            },
            {
                "name": "load",
                "type": 2,
                "description": "<p>Load the image or retry if loading previously failed.\nLoading is taken care of by the tile queue, and calling this method is\nonly needed for preloading or for reloading in case of an error.</p>",
                "url": "module-ol_Tile-Tile#load"
            },
            {
                "name": "setState",
                "type": 3,
                "description": "<p>Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,\nit is important to set the state correctly to {@link module:ol/TileState~ERROR}\nwhen the tile cannot be loaded. Otherwise the tile cannot be removed from\nthe tile queue and will block other requests.</p>",
                "url": "module-ol_Tile-Tile#setState"
            }
        ],
        "events": []
    },
    {
        "name": "ol/Tile",
        "description": "[MODULE]",
        "url": "module-ol_Tile",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/tilecoord",
        "description": "[MODULE]",
        "url": "module-ol_tilecoord",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/tilegrid",
        "description": "[MODULE]",
        "url": "module-ol_tilegrid",
        "members": [],
        "methods": [
            {
                "name": "createXYZ",
                "type": 0,
                "description": "<p>Creates a tile grid with a standard XYZ tiling scheme.</p>",
                "url": "module-ol_tilegrid#.createXYZ"
            }
        ],
        "events": []
    },
    {
        "name": "TileGrid",
        "description": "[CLASS]",
        "url": "module-ol_tilegrid_TileGrid-TileGrid",
        "members": [],
        "methods": [
            {
                "name": "forEachTileCoord",
                "type": 0,
                "description": "<p>Call a function with each tile coordinate for a given extent and zoom level.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#forEachTileCoord"
            },
            {
                "name": "getExtent",
                "type": 1,
                "description": "<p>Get the extent for this tile grid, if it was configured.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getExtent"
            },
            {
                "name": "getMaxZoom",
                "type": 2,
                "description": "<p>Get the maximum zoom level for the grid.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getMaxZoom"
            },
            {
                "name": "getMinZoom",
                "type": 3,
                "description": "<p>Get the minimum zoom level for the grid.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getMinZoom"
            },
            {
                "name": "getOrigin",
                "type": 4,
                "description": "<p>Get the origin for the grid at the given zoom level.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getOrigin"
            },
            {
                "name": "getResolution",
                "type": 5,
                "description": "<p>Get the resolution for the given zoom level.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getResolution"
            },
            {
                "name": "getResolutions",
                "type": 6,
                "description": "<p>Get the list of resolutions for the tile grid.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getResolutions"
            },
            {
                "name": "getTileCoordExtent",
                "type": 7,
                "description": "<p>Get the extent of a tile coordinate.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getTileCoordExtent"
            },
            {
                "name": "getTileCoordForCoordAndResolution",
                "type": 8,
                "description": "<p>Get the tile coordinate for the given map coordinate and resolution.  This\nmethod considers that coordinates that intersect tile boundaries should be\nassigned the higher tile coordinate.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getTileCoordForCoordAndResolution"
            },
            {
                "name": "getTileCoordForCoordAndZ",
                "type": 9,
                "description": "<p>Get a tile coordinate given a map coordinate and zoom level.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getTileCoordForCoordAndZ"
            },
            {
                "name": "getTileSize",
                "type": 10,
                "description": "<p>Get the tile size for a zoom level. The type of the return value matches the\n<code>tileSize</code> or <code>tileSizes</code> that the tile grid was configured with. To always\nget an {@link module:ol/size~Size}, run the result through {@link module:ol/size.toSize}.</p>",
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getTileSize"
            },
            {
                "name": "getZForResolution",
                "type": 11,
                "url": "module-ol_tilegrid_TileGrid-TileGrid#getZForResolution"
            }
        ],
        "events": []
    },
    {
        "name": "WMTSTileGrid",
        "description": "[CLASS]",
        "url": "module-ol_tilegrid_WMTS-WMTSTileGrid",
        "members": [],
        "methods": [
            {
                "name": "forEachTileCoord",
                "type": 0,
                "description": "<p>Call a function with each tile coordinate for a given extent and zoom level.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#forEachTileCoord"
            },
            {
                "name": "getExtent",
                "type": 1,
                "description": "<p>Get the extent for this tile grid, if it was configured.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getExtent"
            },
            {
                "name": "getMatrixIds",
                "type": 2,
                "description": "<p>Get the list of matrix identifiers.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getMatrixIds"
            },
            {
                "name": "getMaxZoom",
                "type": 3,
                "description": "<p>Get the maximum zoom level for the grid.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getMaxZoom"
            },
            {
                "name": "getMinZoom",
                "type": 4,
                "description": "<p>Get the minimum zoom level for the grid.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getMinZoom"
            },
            {
                "name": "getOrigin",
                "type": 5,
                "description": "<p>Get the origin for the grid at the given zoom level.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getOrigin"
            },
            {
                "name": "getResolution",
                "type": 6,
                "description": "<p>Get the resolution for the given zoom level.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getResolution"
            },
            {
                "name": "getResolutions",
                "type": 7,
                "description": "<p>Get the list of resolutions for the tile grid.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getResolutions"
            },
            {
                "name": "getTileCoordExtent",
                "type": 8,
                "description": "<p>Get the extent of a tile coordinate.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getTileCoordExtent"
            },
            {
                "name": "getTileCoordForCoordAndResolution",
                "type": 9,
                "description": "<p>Get the tile coordinate for the given map coordinate and resolution.  This\nmethod considers that coordinates that intersect tile boundaries should be\nassigned the higher tile coordinate.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getTileCoordForCoordAndResolution"
            },
            {
                "name": "getTileCoordForCoordAndZ",
                "type": 10,
                "description": "<p>Get a tile coordinate given a map coordinate and zoom level.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getTileCoordForCoordAndZ"
            },
            {
                "name": "getTileSize",
                "type": 11,
                "description": "<p>Get the tile size for a zoom level. The type of the return value matches the\n<code>tileSize</code> or <code>tileSizes</code> that the tile grid was configured with. To always\nget an {@link module:ol/size~Size}, run the result through {@link module:ol/size.toSize}.</p>",
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getTileSize"
            },
            {
                "name": "getZForResolution",
                "type": 12,
                "url": "module-ol_tilegrid_WMTS-WMTSTileGrid#getZForResolution"
            }
        ],
        "events": []
    },
    {
        "name": "ol/tilegrid/WMTS",
        "description": "[MODULE]",
        "url": "module-ol_tilegrid_WMTS",
        "members": [],
        "methods": [
            {
                "name": "createFromCapabilitiesMatrixSet",
                "type": 0,
                "description": "<p>Create a tile grid from a WMTS capabilities matrix set and an\noptional TileMatrixSetLimits.</p>",
                "url": "module-ol_tilegrid_WMTS#.createFromCapabilitiesMatrixSet"
            }
        ],
        "events": []
    },
    {
        "name": "ol/TileState",
        "description": "[MODULE]",
        "url": "module-ol_TileState",
        "members": [
            {
                "name": "module:ol/TileState",
                "type": 0,
                "url": "module-ol_TileState"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/transform",
        "description": "[MODULE]",
        "url": "module-ol_transform",
        "members": [],
        "methods": [
            {
                "name": "composeCssTransform",
                "type": 0,
                "description": "<p>Creates a composite transform given an initial translation, scale, rotation, and\nfinal translation (in that order only, not commutative). The resulting transform\nstring can be applied as <code>transform</code> property of an HTMLElement's style.</p>",
                "url": "module-ol_transform#.composeCssTransform"
            }
        ],
        "events": []
    },
    {
        "name": "ol/util",
        "description": "[MODULE]",
        "url": "module-ol_util",
        "members": [],
        "methods": [
            {
                "name": "getUid",
                "type": 0,
                "description": "<p>Gets a unique ID for an object. This mutates the object so that further calls\nwith the same object as a parameter returns the same value. Unique IDs are generated\nas a strictly increasing sequence. Adapted from goog.getUid.</p>",
                "url": "module-ol_util#.getUid"
            }
        ],
        "events": []
    },
    {
        "name": "VectorTile",
        "description": "[CLASS]",
        "url": "module-ol_VectorTile-VectorTile",
        "members": [],
        "methods": [
            {
                "name": "dispatchEvent",
                "type": 0,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_VectorTile-VectorTile#dispatchEvent"
            },
            {
                "name": "getFeatures",
                "type": 1,
                "description": "<p>Get the features for this tile. Geometries will be in the view projection.</p>",
                "url": "module-ol_VectorTile-VectorTile#getFeatures"
            },
            {
                "name": "getFormat",
                "type": 2,
                "description": "<p>Get the feature format assigned for reading this tile's features.</p>",
                "url": "module-ol_VectorTile-VectorTile#getFormat"
            },
            {
                "name": "getTileCoord",
                "type": 3,
                "description": "<p>Get the tile coordinate for this tile.</p>",
                "url": "module-ol_VectorTile-VectorTile#getTileCoord"
            },
            {
                "name": "setFeatures",
                "type": 4,
                "description": "<p>Function for use in an {@link module:ol/source/VectorTile~VectorTile}'s <code>tileLoadFunction</code>.\nSets the features for the tile.</p>",
                "url": "module-ol_VectorTile-VectorTile#setFeatures"
            },
            {
                "name": "setLoader",
                "type": 5,
                "description": "<p>Set the feature loader for reading this tile's features.</p>",
                "url": "module-ol_VectorTile-VectorTile#setLoader"
            },
            {
                "name": "setState",
                "type": 6,
                "description": "<p>Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,\nit is important to set the state correctly to {@link module:ol/TileState~ERROR}\nwhen the tile cannot be loaded. Otherwise the tile cannot be removed from\nthe tile queue and will block other requests.</p>",
                "url": "module-ol_VectorTile-VectorTile#setState"
            }
        ],
        "events": []
    },
    {
        "name": "View",
        "description": "[CLASS]",
        "url": "module-ol_View-View",
        "members": [
            {
                "name": "padding",
                "type": 0,
                "description": "<p>Padding (in css pixels).\nIf the map viewport is partially covered with other content (overlays) along\nits edges, this setting allows to shift the center of the viewport away from that\ncontent. The order of the values in the array is top, right, bottom, left.\nThe default is no padding, which is equivalent to <code>[0, 0, 0, 0]</code>.</p>",
                "url": "module-ol_View-View#padding"
            }
        ],
        "methods": [
            {
                "name": "adjustCenter",
                "type": 0,
                "description": "<p>Adds relative coordinates to the center of the view. Any extent constraint will apply.</p>",
                "url": "module-ol_View-View#adjustCenter"
            },
            {
                "name": "adjustResolution",
                "type": 1,
                "description": "<p>Multiply the view resolution by a ratio, optionally using an anchor. Any resolution\nconstraint will apply.</p>",
                "url": "module-ol_View-View#adjustResolution"
            },
            {
                "name": "adjustRotation",
                "type": 2,
                "description": "<p>Adds a value to the view rotation, optionally using an anchor. Any rotation\nconstraint will apply.</p>",
                "url": "module-ol_View-View#adjustRotation"
            },
            {
                "name": "adjustZoom",
                "type": 3,
                "description": "<p>Adds a value to the view zoom level, optionally using an anchor. Any resolution\nconstraint will apply.</p>",
                "url": "module-ol_View-View#adjustZoom"
            },
            {
                "name": "animate",
                "type": 4,
                "description": "<p>Animate the view.  The view's center, zoom (or resolution), and rotation\ncan be animated for smooth transitions between view states.  For example,\nto animate the view to a new zoom level:</p>\n<pre class=\"prettyprint source\"><code>view.animate({zoom: view.getZoom() + 1});</code></pre><p>By default, the animation lasts one second and uses in-and-out easing.  You\ncan customize this behavior by including <code>duration</code> (in milliseconds) and\n<code>easing</code> options (see {@link module:ol/easing}).</p>\n<p>To chain together multiple animations, call the method with multiple\nanimation objects.  For example, to first zoom and then pan:</p>\n<pre class=\"prettyprint source\"><code>view.animate({zoom: 10}, {center: [0, 0]});</code></pre><p>If you provide a function as the last argument to the animate method, it\nwill get called at the end of an animation series.  The callback will be\ncalled with <code>true</code> if the animation series completed on its own or <code>false</code>\nif it was cancelled.</p>\n<p>Animations are cancelled by user interactions (e.g. dragging the map) or by\ncalling <code>view.setCenter()</code>, <code>view.setResolution()</code>, or <code>view.setRotation()</code>\n(or another method that calls one of these).</p>",
                "url": "module-ol_View-View#animate"
            },
            {
                "name": "beginInteraction",
                "type": 5,
                "description": "<p>Notify the View that an interaction has started.\nThe view state will be resolved to a stable one if needed\n(depending on its constraints).</p>",
                "url": "module-ol_View-View#beginInteraction"
            },
            {
                "name": "calculateExtent",
                "type": 6,
                "description": "<p>Calculate the extent for the current view state and the passed size.\nThe size is the pixel dimensions of the box into which the calculated extent\nshould fit. In most cases you want to get the extent of the entire map,\nthat is <code>map.getSize()</code>.</p>",
                "url": "module-ol_View-View#calculateExtent"
            },
            {
                "name": "cancelAnimations",
                "type": 7,
                "description": "<p>Cancel any ongoing animations.</p>",
                "url": "module-ol_View-View#cancelAnimations"
            },
            {
                "name": "centerOn",
                "type": 8,
                "description": "<p>Center on coordinate and view position.</p>",
                "url": "module-ol_View-View#centerOn"
            },
            {
                "name": "changed",
                "type": 9,
                "description": "<p>Increases the revision counter and dispatches a 'change' event.</p>",
                "url": "module-ol_View-View#changed"
            },
            {
                "name": "dispatchEvent",
                "type": 10,
                "description": "<p>Dispatches an event and calls all listeners listening for events\nof this type. The event parameter can either be a string or an\nObject with a <code>type</code> property.</p>",
                "url": "module-ol_View-View#dispatchEvent"
            },
            {
                "name": "endInteraction",
                "type": 11,
                "description": "<p>Notify the View that an interaction has ended. The view state will be resolved\nto a stable one if needed (depending on its constraints).</p>",
                "url": "module-ol_View-View#endInteraction"
            },
            {
                "name": "fit",
                "type": 12,
                "description": "<p>Fit the given geometry or extent based on the given map size and border.\nThe size is pixel dimensions of the box to fit the extent into.\nIn most cases you will want to use the map size, that is <code>map.getSize()</code>.\nTakes care of the map angle.</p>",
                "url": "module-ol_View-View#fit"
            },
            {
                "name": "get",
                "type": 13,
                "description": "<p>Gets a value.</p>",
                "url": "module-ol_View-View#get"
            },
            {
                "name": "getAnimating",
                "type": 14,
                "description": "<p>Determine if the view is being animated.</p>",
                "url": "module-ol_View-View#getAnimating"
            },
            {
                "name": "getCenter",
                "type": 15,
                "description": "<p>Get the view center.</p>",
                "url": "module-ol_View-View#getCenter"
            },
            {
                "name": "getInteracting",
                "type": 16,
                "description": "<p>Determine if the user is interacting with the view, such as panning or zooming.</p>",
                "url": "module-ol_View-View#getInteracting"
            },
            {
                "name": "getKeys",
                "type": 17,
                "description": "<p>Get a list of object property names.</p>",
                "url": "module-ol_View-View#getKeys"
            },
            {
                "name": "getMaxResolution",
                "type": 18,
                "description": "<p>Get the maximum resolution of the view.</p>",
                "url": "module-ol_View-View#getMaxResolution"
            },
            {
                "name": "getMaxZoom",
                "type": 19,
                "description": "<p>Get the maximum zoom level for the view.</p>",
                "url": "module-ol_View-View#getMaxZoom"
            },
            {
                "name": "getMinResolution",
                "type": 20,
                "description": "<p>Get the minimum resolution of the view.</p>",
                "url": "module-ol_View-View#getMinResolution"
            },
            {
                "name": "getMinZoom",
                "type": 21,
                "description": "<p>Get the minimum zoom level for the view.</p>",
                "url": "module-ol_View-View#getMinZoom"
            },
            {
                "name": "getProjection",
                "type": 22,
                "description": "<p>Get the view projection.</p>",
                "url": "module-ol_View-View#getProjection"
            },
            {
                "name": "getProperties",
                "type": 23,
                "description": "<p>Get an object of all property names and values.</p>",
                "url": "module-ol_View-View#getProperties"
            },
            {
                "name": "getResolution",
                "type": 24,
                "description": "<p>Get the view resolution.</p>",
                "url": "module-ol_View-View#getResolution"
            },
            {
                "name": "getResolutionForExtent",
                "type": 25,
                "description": "<p>Get the resolution for a provided extent (in map units) and size (in pixels).</p>",
                "url": "module-ol_View-View#getResolutionForExtent"
            },
            {
                "name": "getResolutionForZoom",
                "type": 26,
                "description": "<p>Get the resolution for a zoom level.</p>",
                "url": "module-ol_View-View#getResolutionForZoom"
            },
            {
                "name": "getResolutions",
                "type": 27,
                "description": "<p>Get the resolutions for the view. This returns the array of resolutions\npassed to the constructor of the View, or undefined if none were given.</p>",
                "url": "module-ol_View-View#getResolutions"
            },
            {
                "name": "getRevision",
                "type": 28,
                "description": "<p>Get the version number for this object.  Each time the object is modified,\nits version number will be incremented.</p>",
                "url": "module-ol_View-View#getRevision"
            },
            {
                "name": "getRotation",
                "type": 29,
                "description": "<p>Get the view rotation.</p>",
                "url": "module-ol_View-View#getRotation"
            },
            {
                "name": "getZoom",
                "type": 30,
                "description": "<p>Get the current zoom level. This method may return non-integer zoom levels\nif the view does not constrain the resolution, or if an interaction or\nanimation is underway.</p>",
                "url": "module-ol_View-View#getZoom"
            },
            {
                "name": "getZoomForResolution",
                "type": 31,
                "description": "<p>Get the zoom level for a resolution.</p>",
                "url": "module-ol_View-View#getZoomForResolution"
            },
            {
                "name": "on",
                "type": 32,
                "description": "<p>Listen for a certain type of event.</p>",
                "url": "module-ol_View-View#on"
            },
            {
                "name": "once",
                "type": 33,
                "description": "<p>Listen once for a certain type of event.</p>",
                "url": "module-ol_View-View#once"
            },
            {
                "name": "set",
                "type": 34,
                "description": "<p>Sets a value.</p>",
                "url": "module-ol_View-View#set"
            },
            {
                "name": "setCenter",
                "type": 35,
                "description": "<p>Set the center of the current view. Any extent constraint will apply.</p>",
                "url": "module-ol_View-View#setCenter"
            },
            {
                "name": "setConstrainResolution",
                "type": 36,
                "description": "<p>Set whether the view should allow intermediary zoom levels.</p>",
                "url": "module-ol_View-View#setConstrainResolution"
            },
            {
                "name": "setMaxZoom",
                "type": 37,
                "description": "<p>Set a new maximum zoom level for the view.</p>",
                "url": "module-ol_View-View#setMaxZoom"
            },
            {
                "name": "setMinZoom",
                "type": 38,
                "description": "<p>Set a new minimum zoom level for the view.</p>",
                "url": "module-ol_View-View#setMinZoom"
            },
            {
                "name": "setProperties",
                "type": 39,
                "description": "<p>Sets a collection of key-value pairs.  Note that this changes any existing\nproperties and adds new ones (it does not remove any existing properties).</p>",
                "url": "module-ol_View-View#setProperties"
            },
            {
                "name": "setResolution",
                "type": 40,
                "description": "<p>Set the resolution for this view. Any resolution constraint will apply.</p>",
                "url": "module-ol_View-View#setResolution"
            },
            {
                "name": "setRotation",
                "type": 41,
                "description": "<p>Set the rotation for this view. Any rotation constraint will apply.</p>",
                "url": "module-ol_View-View#setRotation"
            },
            {
                "name": "setZoom",
                "type": 42,
                "description": "<p>Zoom to a specific zoom level. Any resolution constrain will apply.</p>",
                "url": "module-ol_View-View#setZoom"
            },
            {
                "name": "un",
                "type": 43,
                "description": "<p>Unlisten for a certain type of event.</p>",
                "url": "module-ol_View-View#un"
            },
            {
                "name": "unset",
                "type": 44,
                "description": "<p>Unsets a property.</p>",
                "url": "module-ol_View-View#unset"
            }
        ],
        "events": []
    },
    {
        "name": "ol/View",
        "description": "[MODULE]",
        "url": "module-ol_View",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/webgl",
        "description": "[MODULE]",
        "url": "module-ol_webgl",
        "members": [
            {
                "name": "ARRAY_BUFFER",
                "type": 0,
                "description": "<p>Used by {@link module:ol/webgl/Helper~WebGLHelper} for buffers containing vertices data, such as\nposition, color, texture coordinate, etc. These vertices are then referenced by an index buffer\nto be drawn on screen (see {@link module:ol/webgl.ELEMENT_ARRAY_BUFFER}).</p>",
                "url": "module-ol_webgl#.ARRAY_BUFFER"
            },
            {
                "name": "DYNAMIC_DRAW",
                "type": 1,
                "description": "<p>Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.</p>",
                "url": "module-ol_webgl#.DYNAMIC_DRAW"
            },
            {
                "name": "ELEMENT_ARRAY_BUFFER",
                "type": 2,
                "description": "<p>Used by {@link module:ol/webgl/Helper~WebGLHelper} for buffers containing indices data.\nIndex buffers are essentially lists of references to vertices defined in a vertex buffer\n(see {@link module:ol/webgl.ARRAY_BUFFER}), and define the primitives (triangles) to be drawn.</p>",
                "url": "module-ol_webgl#.ELEMENT_ARRAY_BUFFER"
            },
            {
                "name": "STATIC_DRAW",
                "type": 3,
                "description": "<p>Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.</p>",
                "url": "module-ol_webgl#.STATIC_DRAW"
            },
            {
                "name": "STREAM_DRAW",
                "type": 4,
                "description": "<p>Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.</p>",
                "url": "module-ol_webgl#.STREAM_DRAW"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "WebGLArrayBuffer",
        "description": "[CLASS]",
        "url": "module-ol_webgl_Buffer-WebGLArrayBuffer",
        "members": [],
        "methods": [],
        "events": []
    },
    {
        "name": "ol/webgl/Buffer",
        "description": "[MODULE]",
        "url": "module-ol_webgl_Buffer",
        "members": [
            {
                "name": "BufferUsage",
                "type": 0,
                "description": "<p>Used to describe the intended usage for the data: <code>STATIC_DRAW</code>, <code>STREAM_DRAW</code>\nor <code>DYNAMIC_DRAW</code>.</p>",
                "url": "module-ol_webgl_Buffer#.BufferUsage"
            }
        ],
        "methods": [],
        "events": []
    },
    {
        "name": "WebGLHelper",
        "description": "[CLASS]",
        "url": "module-ol_webgl_Helper-WebGLHelper",
        "members": [],
        "methods": [
            {
                "name": "bindBuffer",
                "type": 0,
                "description": "<p>Just bind the buffer if it's in the cache. Otherwise create\nthe WebGL buffer, bind it, populate it, and add an entry to\nthe cache.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#bindBuffer"
            },
            {
                "name": "createTexture",
                "type": 1,
                "description": "<p>Will create or reuse a given webgl texture and apply the given size. If no image data\nspecified, the texture will be empty, otherwise image data will be used and the <code>size</code>\nparameter will be ignored.\nNote: wrap parameters are set to clamp to edge, min filter is set to linear.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#createTexture"
            },
            {
                "name": "drawElements",
                "type": 2,
                "description": "<p>Execute a draw call based on the currently bound program, texture, buffers, attributes.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#drawElements"
            },
            {
                "name": "enableAttributes",
                "type": 3,
                "description": "<p>Will enable the following attributes to be read from the currently bound buffer,\ni.e. tell the GPU where to read the different attributes in the buffer. An error in the\nsize/type/order of attributes will most likely break the rendering and throw a WebGL exception.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#enableAttributes"
            },
            {
                "name": "flushBufferData",
                "type": 4,
                "description": "<p>Update the data contained in the buffer array; this is required for the\nnew data to be rendered</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#flushBufferData"
            },
            {
                "name": "getAttributeLocation",
                "type": 5,
                "description": "<p>Will get the location from the shader or the cache</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#getAttributeLocation"
            },
            {
                "name": "getCanvas",
                "type": 6,
                "url": "module-ol_webgl_Helper-WebGLHelper#getCanvas"
            },
            {
                "name": "getGL",
                "type": 7,
                "description": "<p>Get the WebGL rendering context</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#getGL"
            },
            {
                "name": "getProgram",
                "type": 8,
                "description": "<p>Create a program for a vertex and fragment shader.  Throws if shader compilation fails.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#getProgram"
            },
            {
                "name": "getUniformLocation",
                "type": 9,
                "description": "<p>Will get the location from the shader or the cache</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#getUniformLocation"
            },
            {
                "name": "makeProjectionTransform",
                "type": 10,
                "description": "<p>Modifies the given transform to apply the rotation/translation/scaling of the given frame state.\nThe resulting transform can be used to convert world space coordinates to view coordinates.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#makeProjectionTransform"
            },
            {
                "name": "prepareDraw",
                "type": 11,
                "description": "<p>Clear the buffer &amp; set the viewport to draw.\nPost process passes will be initialized here, the first one being bound as a render target for\nsubsequent draw calls.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#prepareDraw"
            },
            {
                "name": "setUniformFloatValue",
                "type": 12,
                "description": "<p>Give a value for a standard float uniform</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#setUniformFloatValue"
            },
            {
                "name": "setUniformMatrixValue",
                "type": 13,
                "description": "<p>Give a value for a standard matrix4 uniform</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#setUniformMatrixValue"
            },
            {
                "name": "useProgram",
                "type": 14,
                "description": "<p>Use a program.  If the program is already in use, this will return <code>false</code>.</p>",
                "url": "module-ol_webgl_Helper-WebGLHelper#useProgram"
            }
        ],
        "events": []
    },
    {
        "name": "ol/webgl/Helper",
        "description": "[MODULE]",
        "url": "module-ol_webgl_Helper",
        "members": [
            {
                "name": "AttributeType",
                "type": 0,
                "description": "<p>Attribute types, either <code>UNSIGNED_BYTE</code>, <code>UNSIGNED_SHORT</code>, <code>UNSIGNED_INT</code> or <code>FLOAT</code>\nNote: an attribute stored in a <code>Float32Array</code> should be of type <code>FLOAT</code>.</p>",
                "url": "module-ol_webgl_Helper#.AttributeType"
            },
            {
                "name": "DefaultUniform",
                "type": 1,
                "description": "<p>Uniform names used in the default shaders: <code>PROJECTION_MATRIX</code>, <code>OFFSET_SCALE_MATRIX</code>.\nand <code>OFFSET_ROTATION_MATRIX</code>.</p>",
                "url": "module-ol_webgl_Helper#.DefaultUniform"
            },
            {
                "name": "ShaderType",
                "type": 2,
                "description": "<p>Shader types, either <code>FRAGMENT_SHADER</code> or <code>VERTEX_SHADER</code>.</p>",
                "url": "module-ol_webgl_Helper#.ShaderType"
            }
        ],
        "methods": [
            {
                "name": "computeAttributesStride",
                "type": 0,
                "description": "<p>Compute a stride in bytes based on a list of attributes</p>",
                "url": "module-ol_webgl_Helper#.computeAttributesStride"
            }
        ],
        "events": []
    },
    {
        "name": "WebGLPostProcessingPass",
        "description": "[CLASS]",
        "url": "module-ol_webgl_PostProcessingPass-WebGLPostProcessingPass",
        "members": [],
        "methods": [
            {
                "name": "apply",
                "type": 0,
                "description": "<p>Render to the next postprocessing pass (or to the canvas if final pass).</p>",
                "url": "module-ol_webgl_PostProcessingPass-WebGLPostProcessingPass#apply"
            },
            {
                "name": "getFrameBuffer",
                "type": 1,
                "url": "module-ol_webgl_PostProcessingPass-WebGLPostProcessingPass#getFrameBuffer"
            },
            {
                "name": "getGL",
                "type": 2,
                "description": "<p>Get the WebGL rendering context</p>",
                "url": "module-ol_webgl_PostProcessingPass-WebGLPostProcessingPass#getGL"
            },
            {
                "name": "init",
                "type": 3,
                "description": "<p>Initialize the render target texture of the post process, make sure it is at the\nright size and bind it as a render target for the next draw calls.\nThe last step to be initialized will be the one where the primitives are rendered.</p>",
                "url": "module-ol_webgl_PostProcessingPass-WebGLPostProcessingPass#init"
            }
        ],
        "events": []
    },
    {
        "name": "WebGLRenderTarget",
        "description": "[CLASS]",
        "url": "module-ol_webgl_RenderTarget-WebGLRenderTarget",
        "members": [],
        "methods": [
            {
                "name": "clearCachedData",
                "type": 0,
                "description": "<p>This will cause following calls to <code>#readAll</code> or <code>#readPixel</code> to download the content of the\nrender target into memory, which is an expensive operation.\nThis content will be kept in cache but should be cleared after each new render.</p>",
                "url": "module-ol_webgl_RenderTarget-WebGLRenderTarget#clearCachedData"
            },
            {
                "name": "getSize",
                "type": 1,
                "description": "<p>Returns the size of the render target texture</p>",
                "url": "module-ol_webgl_RenderTarget-WebGLRenderTarget#getSize"
            },
            {
                "name": "readAll",
                "type": 2,
                "description": "<p>Returns the full content of the frame buffer as a series of r, g, b, a components\nin the 0-255 range (unsigned byte).</p>",
                "url": "module-ol_webgl_RenderTarget-WebGLRenderTarget#readAll"
            },
            {
                "name": "readPixel",
                "type": 3,
                "description": "<p>Reads one pixel of the frame buffer as an array of r, g, b, a components\nin the 0-255 range (unsigned byte).\nIf x and/or y are outside of existing data, an array filled with 0 is returned.</p>",
                "url": "module-ol_webgl_RenderTarget-WebGLRenderTarget#readPixel"
            },
            {
                "name": "setSize",
                "type": 4,
                "description": "<p>Changes the size of the render target texture. Note: will do nothing if the size\nis already the same.</p>",
                "url": "module-ol_webgl_RenderTarget-WebGLRenderTarget#setSize"
            }
        ],
        "events": []
    },
    {
        "name": "ol/xml",
        "description": "[MODULE]",
        "url": "module-ol_xml",
        "members": [],
        "methods": [
            {
                "name": "getAllTextContent",
                "type": 0,
                "description": "<p>Recursively grab all text content of child nodes into a single string.</p>",
                "url": "module-ol_xml#.getAllTextContent"
            },
            {
                "name": "parse",
                "type": 1,
                "description": "<p>Parse an XML string to an XML Document.</p>",
                "url": "module-ol_xml#.parse"
            },
            {
                "name": "registerDocument",
                "type": 2,
                "description": "<p>Register a Document to use when creating nodes for XML serializations. Can be used\nto inject a Document where there is no globally available implementation.</p>",
                "url": "module-ol_xml#.registerDocument"
            },
            {
                "name": "registerXMLSerializer",
                "type": 3,
                "description": "<p>Register a XMLSerializer. Can be used  to inject a XMLSerializer\nwhere there is no globally available implementation.</p>",
                "url": "module-ol_xml#.registerXMLSerializer"
            }
        ],
        "events": []
    }
]
