﻿

#pragma checksum "E:\development\Github\_windows8\jaydata.org-examples\JayDataExamples\FlowerShop_Win8\FlowerShop\CartDetailPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "C389ED7F7002C00A4672341F93784940"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FlowerShop
{
    partial class CartDetailPage : global::FlowerShop.Common.LayoutAwarePage, global::Windows.UI.Xaml.Markup.IComponentConnector
    {
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 4.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
 
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 1:
                #line 84 "..\..\CartDetailPage.xaml"
                ((global::Windows.UI.Xaml.Controls.Primitives.Selector)(target)).SelectionChanged += this.itemListView_SelectionChanged;
                 #line default
                 #line hidden
                break;
            case 2:
                #line 107 "..\..\CartDetailPage.xaml"
                ((global::Windows.UI.Xaml.Controls.Primitives.ButtonBase)(target)).Click += this.GoBack;
                 #line default
                 #line hidden
                break;
            case 3:
                #line 59 "..\..\CartDetailPage.xaml"
                ((global::Windows.UI.Xaml.Controls.Primitives.ButtonBase)(target)).Click += this.submitOrder_Click;
                 #line default
                 #line hidden
                break;
            case 4:
                #line 60 "..\..\CartDetailPage.xaml"
                ((global::Windows.UI.Xaml.Controls.Primitives.ButtonBase)(target)).Click += this.cancelOrder_Click;
                 #line default
                 #line hidden
                break;
            }
            this._contentLoaded = true;
        }
    }
}


