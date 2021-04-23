using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Test.Library.RNTestLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNTestLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNTestLibraryModule"/>.
        /// </summary>
        internal RNTestLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNTestLibrary";
            }
        }
    }
}
